import express from "express"; //importar express

const app = express(); //criar estância express

app.use(express.json()); //indicar para express ler body com json

//mock
const livros = [
  { id: 1, livro: "Teol.Sistematica", grupo: "Estudo" },
  { id: 2, livro: "Como cuidar", grupo: "Evangelismo" },
  { id: 3, livro: "Dicionario", grupo: "Estudo" },
  { id: 4, livro: "Apol. Pura", grupo: "Apologética" },
  { id: 5, livro: "Hermeneutica", grupo: "Hermeneutica" },
];

//busca por ID
function buscarLivroPorId(id) {
  return livros.filter((livros) => livros.id == id);
}

//buscar a posição ou index do elemento no array por ID
function buscarIndexLivros(id) {
  return livros.findIndex((livros) => livros.id == id);
}

//criar rota raiz ou padrão
app.get("/", (req, res) => {
  res.send("cURSO nODE");
});

//isso é um endPoint = caminho especifico
app.get("/livros", (req, res) => {
  res.status(200).send(livros);
});

//pesquisa por ID
app.get("/livros/:id", (req, res) => {
  res.json(buscarLivroPorId(req.params.id));
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});
/*
app.delete("/livros/:id", (req, res) => {
  let index = buscarIndexLivros(req.params.id);
  livros.splice(index, 2);
  res.send("Livro ${req.params.id} excluida com sucesso!");
});*/

app.put("/livros/:id", (req, res) => {
  let index = buscarIndexLivros(req.params.id);
  livros[index].livros = req.body.livros;
  livros[index].grupo = req.body.grupo;
  res.json(livros);
});

export default app;
