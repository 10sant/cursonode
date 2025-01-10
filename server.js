import app from "./src/app.js";

//importar conexão
//import concexao from "./infra/conexao.js";

const PORT = 3003; //definição de porta

//fazer a conexao
/*concexao.connet((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Concexão relaizada com sucesso!");*/

//escutar eventos da porta 3333
app.listen(PORT, () => {
  console.log("Servidor rodando no endereço http://localhost:3003");
});
//}
//});
