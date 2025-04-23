# 🫂 AjudaJá API

A **AjudaJá API** é uma API utilitária com foco social, desenvolvida para oferecer suporte informativo a pessoas em situação de vulnerabilidade. Pode ser integrada a sistemas de assistência social, aplicativos de ONGs, centros de apoio e projetos escolares com impacto social.

---

## ❓ Problematização

Em um país marcado por profundas desigualdades sociais, **milhões de pessoas vivem em situação de vulnerabilidade**: sem acesso à informação, apoio psicológico, alimentação, moradia digna ou mesmo um espaço de escuta.  
Enquanto tecnologias avançam rapidamente, **as populações marginalizadas permanecem desconectadas de soluções digitais acessíveis**, principalmente aquelas que não exigem alto custo ou dispositivos modernos.

Pessoas em situação de rua, com deficiência visual, idosos abandonados, migrantes e comunidades em risco social frequentemente não têm acesso a **serviços básicos** ou **informações úteis** sobre seus direitos, locais de apoio e mensagens de acolhimento.

---

## 💡 Objetivo

Criar uma solução que reúna funcionalidades úteis, simples e acessíveis, para ajudar na comunicação e na inclusão social de comunidades marginalizadas, pessoas em situação de rua ou em risco social.

---

## 🔧 Tecnologias Utilizadas

- Node.js
- Express
- JavaScript ES6
- Estrutura modular (routes + controllers + data)

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ajuda-ja-api.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd ajuda-ja-api
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. Acesse no navegador ou via Postman:
   ```
   http://localhost:3000/servicos
   ```

---

## 📂 Estrutura do Projeto

```
ajuda-ja-api/
├── controllers/
│   └── servicoController.js
├── data/
│   └── servicos.json
├── routes/
│   └── servicos.js
|    └──direitos.js
|    └──braille.js
|    └──indicacao.js
|    └──motivacao.js
├── index.js
└── package.json
```

---

## 📌 Rotas Disponíveis

### `GET /servicos`

Retorna uma lista de serviços sociais, como:
- Doação de roupas
- Entrega de marmitas
- Apoio psicológico

**Exemplo de resposta:**

```json
[
  {
    "id": 1,
    "titulo": "Doação de roupas",
    "descricao": "Roupas usadas em bom estado para doação a pessoas em situação de rua."
  }
]
```

---

## 👨🏽‍💻 Autor

**Kelvis Xakriabá**  
Estudante do Instituto Federal Goiano – Campus Urutaí  
Projeto desenvolvido para o mini projeto _Servindo 🐕‍🦺_ com foco em acessibilidade e justiça social.

---

## 🧠 Inspiração

“A tecnologia deve estar a serviço da vida. Criar com propósito é nosso maior código.” — Kelvis Xakriabá

---

## 📢 Contribua

Tem sugestões de serviços úteis? Quer ajudar a expandir a API? Abra uma issue ou envie um pull request!
