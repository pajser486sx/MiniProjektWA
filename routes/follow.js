import { Router } from "express"
import profili from "./data/profili.js"
const router = Router()

router.get("/", (req, res) => {
  res.status(200).json({ message: "follow route working" })
})

router.post("/", (req, res) => {
  let { username } = req.body

  if (!username) {
    return res.status(400).json({ greška: "Polje 'username' je obavezno!" })
  }
  let postojiKorisnik = profili.some(p => p.username === username)

  if (!postojiKorisnik) {
    return res.status(404).json({ greška: `Korisnik '${username}' ne postoji!` })
  }
  res.status(201).json({ message: `Zapratili ste korisnika ${username}!` })
})


export default router