import { Router } from "express"
import profili from "./data/profili.js"
const router = Router()

router.get("/", (req, res) => {
  res.status(200).json({ message: "like route working" })
})

//like se posta na sliku ili na story

export default router