import { Router } from "express"
import profili from "./data/profili.js"
const router = Router()

router.get("/", (req, res) => {
  res.status(200).json({ message: "feed route working" })
})

//dohvacanje objava

export default router