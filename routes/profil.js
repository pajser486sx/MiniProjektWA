import { Router } from "express"
import profili from "./data/profili.js"
const router = Router()


router.get("/", (req, res) => {
  res.status(200).json(profili)
})

router.get("/:username", (req, res) => {
    let usernameProfila = req.params.username
    console.log("Tražim profil: ", usernameProfila)
    // -X GET http://localhost:3000/profil/username

    let trazeniProfil = profili.find(p => { 
        return usernameProfila == p.username
    })
    res.json(trazeniProfil)
})

export default router
