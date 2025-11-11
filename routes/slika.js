import { Router } from "express"
import profili from "./data/profili.js"
const router = Router()

let slika = []

router.get("/", (req, res) => {
  res.status(200).json({ message: "slika route working" })
})

//korisnik ce dodati svoju sliku u bazu

router.post("/", (req, res) => {
    let novaSlika = req.body
    slika.push(novaSlika)
    res.status(201).json({ message: "Slika dodana", slika: novaSlika })
})

export default router