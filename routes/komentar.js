import { Router } from "express"
const router = Router()

let comments = [
  {id: 1, username: "mimozaaa", text: "Super slika!", createdAt: "2025-11-11T07:12:29.185Z" },
]

//treba biti dodana mogucnost da korisnik dodaje komentar na sliku ili story


router.get("/", (req, res) => {
  console.log("Svi komentari:", comments)
  res.status(200).json(comments)
});


router.post("/", (req, res) => {
  let { username, text } = req.body

  if (!username || !text) {
    return res.status(400).json({ greška: "Polja 'username' i 'text' su obavezna." })
  }
  let newComment = {
    id: comments.length ? comments[comments.length - 1].id + 1 : 1,
    username,
    text,
    createdAt: new Date()
  };

  comments.push(newComment)
  console.log("Novi komentar dodan:", newComment)
  res.status(201).json({ message: "Komentar dodan", komentar: newComment })
})

router.patch("/:id", (req, res) => {
  const idKomentara = parseInt(req.params.id)
  const izmjene = req.body

  const komentarIndex = comments.findIndex(c => c.id === idKomentara)
  if (komentarIndex === -1) {
    return res.status(404).json({ message: "Komentar nije pronađen." })
  }

  comments[komentarIndex] = { ...comments[komentarIndex], ...izmjene, updatedAt: new Date() }

  console.log("Komentar ažuriran:", comments[komentarIndex])
  res.status(200).json({ message: "Komentar ažuriran", komentar: comments[komentarIndex] })
});

export default router;

