import express from "express";
import { createChat, deleteChat, getChats } from "../controllers/chatController.js";
import { protect } from "../middlewares/auth.js";

const chatRouer=express.Router()

chatRouer.get('/create',protect,createChat)
chatRouer.get('/get',protect,getChats)
chatRouer.post('/delete',protect,deleteChat)

export default chatRouer