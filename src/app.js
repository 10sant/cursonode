import express from "express"; //importar express

const app = express(); //criar estância express

app.use(express.json()); //indicar para express ler body com json

//mock
const livros = [
  { id: 1, livro: "Teol.Sistematica", classe: "Estudo" },
  { id: 2, livro: "Como cuidar", classe: "Evangelismo" },
  { id: 3, livro: "Dicionario", classe: "Estudo" },
  { id: 4, livro: "Apol. Pura", classe: "Apologética" },
  { id: 5, livro: "Hermeneutica", classe: "Hermeneutica" },
];

//busca por ID (funcionando)
function buscarLivroPorId(id) {
  return livros.filter((livros) => livros.id == id);
}

//buscar a posição ou index do elemento no array por ID (funcionando)
function buscarIndexLivros(id) {
  return livros.findIndex((livros) => livros.id == id);
}

//cadastrar informação (funcionando)
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

//criar rota raiz ou padrão (funcionando)
app.get("/", (req, res) => {
  res.send("cURSO nODE");
});

//isso é um endPoint = caminho especifico (funcionando)
app.get("/livros", (req, res) => {
  res.status(200).send(livros);
});

//pesquisa por ID (funcionando)
app.get("/livros/:id", (req, res) => {
  res.json(buscarLivroPorId(req.params.id));
});

//atualizar informação (funcionando COM RESALVAS -  ELE NAO ATUALIZA TODO O ITEM PRECISA VERIFICAR)
app.put("/livros/:id", (req, res) => {
  let index = buscarIndexLivros(req.params.id);
  livros[index].livros = req.body.livros;
  livros[index].classe = req.body.classe;
  res.json(livros);
});

/*// deletar informação (deletando itens errado - pendente)
app.delete("/livros/:id", (req, res) => {
  let index = buscarIndexLivros(req.params.id);
  livros.splice(index, 2);
  res.send("Livro ${req.params.id} excluida com sucesso!");
});*/

export default app;
