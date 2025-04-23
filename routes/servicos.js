import express from "express";
import fs from "fs/promises";
const router = express.Router();

router.get("/:cidade", async (req, res) => {
  try {
    const cidade = req.params.cidade.toLowerCase();
    const data = await fs.readFile("./data/servicos.json", "utf-8");
    const servicos = JSON.parse(data);
    const resultado = servicos[cidade] || [];
    res.json({ cidade, servicos: resultado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao ler os serviços" });
  }
});

export default router;
