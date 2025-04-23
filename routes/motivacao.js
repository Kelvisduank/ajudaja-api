import express from "express";
const router = express.Router();

const frases = [
  "Você é mais forte do que imagina.",
  "Acredite no seu potencial.",
  "Cada dia é uma nova chance.",
  "Você não está sozinho.",
  "Tudo pode melhorar."
];

router.get("/", (req, res) => {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  res.json({ frase });
});

export default router;
