import { Router } from "express"
import profili from "./data/profili.js"
const router = Router()

let comments = []

router.get("/", (req, res) => {
  res.status(200).json({ message: "komentar route working" })
})

router.post("/", (req, res) => {
    let noviKomentar = req.body
    comments.push(noviKomentar)
    res.status(201).json({ message: "Komentar dodan", komentar: noviKomentar })
})

router.patch("/:id", (req, res) => {
    let idKomentara = parseInt(req.params.id)
    let izmjene = req.body
    let komentarIndex = comments.findIndex(c => c.id === idKomentara)
    if (komentarIndex !== -1) {
        comments[komentarIndex] = { ...comments[komentarIndex], ...izmjene }
        res.status(200).json({ message: "Komentar ažuriran", komentar: comments[komentarIndex] })
    } else {
        res.status(404).json({ message: "Komentar nije pronađen" })
    }
})  

export default router