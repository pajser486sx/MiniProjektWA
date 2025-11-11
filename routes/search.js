import { Router } from "express";
import profili from "./data/profili.js"
const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "search route working" })
})

router.get("/:username", (req, res) => {
    let usernameProfila = req.params.username
    console.log("Tražim profil: ", usernameProfila)
    
    let trazeniProfil = profili.find(p => p.username === usernameProfila);

    if(trazeniProfil) {
        res.status(200).json({ profil: trazeniProfil })
    } else {
        res.status(404).json({ message: `Korisnik ${usernameProfila} ne postoji!` })
    } 
})

//search se treba proširiti da bude pretraživanje po id-u, imenu, itd...
export default router


