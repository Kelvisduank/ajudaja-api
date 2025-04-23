import express from "express";
const router = express.Router();

const direitos = [
  "Todo cidadão tem direito à saúde, educação e moradia.",
  "A dignidade da pessoa humana é um dos fundamentos do Brasil.",
  "Ninguém será submetido a tortura nem a tratamento desumano ou degradante.",
  "Todos são iguais perante a lei."
];

router.get("/", (req, res) => {
  res.json({ direitos });
});

export default router;