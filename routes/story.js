import { Router } from "express"
import profili from "./data/profili.js"
const router = Router()

let story = []

router.get("/", (req, res) => {
  res.status(200).json({ message: "story route working" })
});

router.post("/", (req, res) => {
    let noviStory = req.body
    story.push(noviStory)
    res.status(201).json({ message: "Story dodan", story: noviStory })
})

export default router