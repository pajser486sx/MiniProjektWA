import { Router } from "express"
import profili from "./data/profili.js"
const router = Router()

let slika = []

router.get("/", (req, res) => {
  res.status(200).json({ message: "slika route working" })
})

export default router