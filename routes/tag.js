import { Router } from "express"
import profili from "./data/profili.js"
const router = Router()

router.get("/", (req, res) => {
  res.status(200).json({ message: "tag route working" });
});

//taganje samo korisnika koji postoje
router.post("/:username", (req, res) => {
    let usernameProfila = req.params.username
    console.log("Tagam profil: ", usernameProfila)

    let trazeniProfil = profili.find(p => { 
        return usernameProfila == p.username
    })
    if (trazeniProfil) {
        res.status(200).json({ message: `Korisnik ${usernameProfila} tagan`, profil: trazeniProfil })
    } else {
        res.status(404).json({ message: `Korisnik ${usernameProfila} nije pronađen` })
    }
}) 



export default router