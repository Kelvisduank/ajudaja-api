import express from "express";
const router = express.Router();

const indicacoes = [
  { tipo: "livro", titulo: "Quarto de Despejo", autor: "Carolina Maria de Jesus" },
  { tipo: "filme", titulo: "Estrelas na Terra", pais: "Índia" },
  { tipo: "podcast", titulo: "Histórias de luta", plataforma: "Spotify" }
];

router.get("/", (req, res) => {
  res.json({ indicacoes });
});

export default router;