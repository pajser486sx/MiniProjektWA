import express from "express";
const app = express();
app.use(express.json());
const PORT = 3000;

import profiliRouter from "./routes/profil.js";
import searchRouter from "./routes/search.js";
import DMsRouter from "./routes/DMs.js";
import feedRouter from "./routes/feed.js";
import followRouter from "./routes/follow.js";
import komentarRouter from "./routes/komentar.js";
import likeRouter from "./routes/like.js";
import slikaRouter from "./routes/slika.js";
import storyRouter from "./routes/story.js";
import tagRouter from "./routes/tag.js";

app.use("/profil", profiliRouter);
app.use("/search", searchRouter);
app.use("/DMs", DMsRouter);
app.use("/feed", feedRouter);
app.use("/follow", followRouter);
app.use("/komentar", komentarRouter);
app.use("/like", likeRouter);
app.use("/slika", slikaRouter);
app.use("/story", storyRouter);
app.use("/tag", tagRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Dobrodošli na Pajin Instagram klon! Imamo sve osim reelsa (to nam ne treba)." });
});

app.listen(PORT, error => {
  if (error) {
    console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
  } else {
    console.log(`Server je pokrenut na http://localhost:${PORT} !`);
  }
});