
import imagekit from "../configs/imagekit.js"
import Chat from "../models/chat.js"
import User from "../models/User.js"
import axios from "axios"
import openai from "../configs/openai.js"



//Text based ai chat controller


export const textMessageController = async (req, res) => {
  try {
    const userId = req.user._id;

    // ✅ Check credits
    if (req.user.credits < 1) {
      return res.json({
        success: false,
        message: "You don't have enough credits to use this feature",
      });
    }

    const { chatId, prompt } = req.body;

    const chat = await Chat.findOne({ userId, _id: chatId });
    if (!chat) {
      return res.json({ success: false, message: "Chat not found" });
    }

    // ✅ Push user message
    chat.messages.push({
      role: "user",
      content: prompt,
      timeStamp: Date.now(),
      isImage: false,
    });

    // ✅ Generate AI reply
    const { choices } = await openai.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    // ✅ Ensure correct field name (timeStamp)
    const reply = {
      role: choices[0]?.message?.role || "assistant",
      content: choices[0]?.message?.content || "No response from AI.",
      timeStamp: Date.now(),
      isImage: false,
    };

    // ✅ Save message and update credits
    chat.messages.push(reply);
    await chat.save();
    await User.updateOne({ _id: userId }, { $inc: { credits: -1 } });

    // ✅ Send final response
    return res.json({ success: true, reply });

  } catch (error) {
    console.error("Error in textMessageController:", error.message);
    return res.json({ success: false, message: error.message });
  }
};


//Image generation Message Controller
export const imageMessageController = async (req, res) => {
    try {
        const userId = req.user._id
        //Check credits
        if (req.user.credits < 2) {
            return res.json({ success: false, message: "You don't have enough credits to use this feature" })
        }
        const { prompt, chatId, isPublished } = req.body
        //Find chat
        const chat = await Chat.findOne({ userId, _id: chatId })
        //Push user message
        chat.messages.push({
            role: "user", content: prompt, timeStamp: Date.now(), isImage: false
        })
        //Encode the prompt
        const encodedPrompt = encodeURIComponent(prompt)

        //Contruct imagekit ai generation URL
        const generatedImageUrl = `${process.env.IMAGEKIT_URL_ENDPOINT}/ik-genimg-prompt-${encodedPrompt}/quickGPT/${Date.now()}.png?tr=w-800,h-800`;
        //Trigger generation by fetching from Image kit
        const aiImageResponse = await axios.get(generatedImageUrl, { responseType: "arraybuffer" })
        //Convert to base64
        const base64Image = `data:image/png;base64,${Buffer.from(aiImageResponse.data, "binary").toString('base64')}`
        //Upload to imagekit media library
        //console.log(imagekit)

        const uploadResponse = await imagekit.upload({
            file: base64Image,
            fileName: `${Date.now()}.png`,
            folder: "quickgpt"
        })

        const reply = {
            role: 'assistant',
            content: uploadResponse.url,
            timeStamp: Date.now(),
            isImage: true,
            isPublished
        }
        res.json({ success: true, reply })
        chat.messages.push(reply)
        await chat.save()
        await User.updateOne({ _id: userId }, { $inc: { credits: -2 } })


    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}