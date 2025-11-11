import { Router } from "express"
import profili from "./data/profili.js"
const router = Router()

router.get("/", (req, res) => {
  res.status(200).json({ message: "DM route working" })
})

//trebat ce unesti postojeceg korisnika i poruku koju saljemo


export default router