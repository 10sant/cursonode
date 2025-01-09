import app from "./src/app.js";
const PORT = 3003; //definição de porta

//escutar eventos da porta 3333
app.listen(PORT, () => {
  console.log("Servidor rodando no endereço http://localhost:3003");
});
