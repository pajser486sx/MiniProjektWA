import { Router } from "express"
import profili from "./data/profili.js"
const router = Router()

let story = []

router.get("/", (req, res) => {
  res.status(200).json({ message: "story route working" })
});

//korisnik će dodat svoj story u bazu

/*
router.post("/", (req, res) => {
    let noviStory = req.body
    story.push(noviStory)
    res.status(201).json({ message: "Story dodan", story: noviStory })
})
*/

//dodavanje storyja ali korisni mora postojati

export default router