import express from 'express'
import { protect } from '../middlewares/auth.js'
import { imageMessageController, textMessageController } from '../controllers/messageController.js'
const messageRouer=express.Router()

messageRouer.post('/text',protect,textMessageController)
messageRouer.post('/image',protect,imageMessageController)

export default messageRouer
