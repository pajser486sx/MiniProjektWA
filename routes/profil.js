import { Router } from "express"
import profili from "./data/profili.js"
const router = Router()


router.get("/", (req, res) => {
  res.status(200).json(profili)
})
//no id :(
router.get("/:username", (req, res) => {
    let usernameProfila = req.params.username
    console.log("Tražim profil: ", usernameProfila)
    
   let trazeniProfil = profili.find(p => p.username === usernameProfila)

    if(trazeniProfil) {
        res.status(200).json({ profil: trazeniProfil })
    } else {
        res.status(404).json({ greška: `Korisnik ${usernameProfila} ne postoji!` })
    } 
})

router.post("/", (req, res) => {
    let noviProfil = req.body
    let { username, name, bio, pfp } = noviProfil

  if (!username || !name) {
    return res.status(400).json({ greška: "Polja username i name su obavezna!" })
  }

  if (username !== username.toLowerCase()) {
    return res.status(400).json({ greška: "Username mora biti napisan malim slovima!" })
  }

  if (username.includes(" ")) {
      return res.status(400).json({ greška: "Username ne smije sadržavati razmake!" })
}
let alreadyExists = profili.some(
    (p) => p.username.toLowerCase() === username.toLowerCase())
  if (alreadyExists) {
    return res.status(409).json({ greška: "Username već postoji!" })
  }

  
  let noviProfil1 = {
    id: profili.length ? profili[profili.length - 1].id + 1 : 1,
    username,
    name,
    bio: bio || "",
    pfp: pfp || "default.png",
  }

  profili.push(noviProfil1);
  return res.status(201).json({message: `Profil ${username} je uspješno kreiran!`, profil: noviProfil1})

})

router.delete("/:id", (req, res) => {
    let idProfila = parseInt(req.params.id)
    let profilIndex = profili.findIndex(pr => pr.id === idProfila)
    if (profilIndex !== -1) {
        let obrisaniProfil = profili.splice(profilIndex, 1)
        res.status(200).json({ message: "Profil obrisan!", profil: obrisaniProfil[0] })
    } else {
        res.status(404).json({ message: "Profil nije pronađen!" })
    }
})

router.patch("/:id", (req, res) => {
    let idProfila = parseInt(req.params.id)
    let izmjene = req.body
    let profilIndex = profili.findIndex(pr => pr.id === idProfila)
    if (profilIndex !== -1) {
        profili[profilIndex] = { ...profili[profilIndex], ...izmjene }
        res.status(200).json({ message: "Profil ažuriran!", profil: profili[profilIndex] })
    } else {
        res.status(404).json({ message: "Profil nije pronađen" })
    }
})

router.put("/:id", (req, res) => {
    let idProfila = parseInt(req.params.id)
    let noviProfil = req.body
    let profilIndex = profili.findIndex(pr => pr.id === idProfila)
    if (profilIndex !== -1) {
        profili[profilIndex] = { id: idProfila, ...noviProfil }
        res.status(200).json({ message: "Profil uspješno uređen!", profil: profili[profilIndex] })
    } else {
        res.status(404).json({ message: "Profil nije pronađen!" })
    }
})

//POWERSHELL: curl.exe --% -X POST http://localhost:3000/profil -H "Content-Type: application/json" -d "{ \"username\": \"novi\", \"name\": \"Le New\", \"bio\": \"Moj bio hah\", \"pfp\": \"stockPhoto22.jpg\" }"
//CMD:
// curl -X POST http://localhost:3000/profil -H "Content-Type: application/json" -d "{ \"username\": \"novi123\", \"name\": \"Le New1\", \"bio\": \"Moj bio hah\", \"pfp\": \"stockPhoto33.jpg\" }"
// curl -X PATCH http://localhost:3000/profil/3 -H "Content-Type: aplication/json" -d "{\"bio\": \"New bio guys!!!\"}"
// curl -X PUT http://localhost:3000/profil/11 -H "Content-Type: application/json" -d "{\"username\": \"brandnewuser\", \"name\": \"I am New\"}"
export default router
