import express from "express";
import motivacaoRoutes from "./routes/motivacao.js";
import servicosRoutes from "./routes/servicos.js";
import brailleRoutes from "./routes/braille.js";
import direitosRoutes from "./routes/direitos.js";
import indicacoesRoutes from "./routes/indicacoes.js";

const app = express();
const PORT = 3000;

app.use("/motivacao", motivacaoRoutes);
app.use("/servicos", servicosRoutes);
app.use("/braille", brailleRoutes);
app.use("/direitos-basicos", direitosRoutes);
app.use("/indicacoes", indicacoesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});