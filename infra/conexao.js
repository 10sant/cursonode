import mysql from "mysql";

const concexao = mysql.createconection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "", //nome do banco de dados
});

export default concexao;
