import express from "express";
const router = express.Router();

const brailleMap = {
  a: "⠁", b: "⠃", c: "⠉", d: "⠙", e: "⠑", f: "⠋", g: "⠛",
  h: "⠓", i: "⠊", j: "⠚", k: "⠅", l: "⠇", m: "⠍", n: "⠝",
  o: "⠕", p: "⠏", q: "⠟", r: "⠗", s: "⠎", t: "⠞", u: "⠥",
  v: "⠧", w: "⠺", x: "⠭", y: "⠽", z: "⠵", " ": " ",
};

router.get("/:frase", (req, res) => {
  const frase = req.params.frase.toLowerCase();
  const braille = frase.split("").map(l => brailleMap[l] || "").join("");
  res.json({ original: frase, braille });
});

export default router;