const express = require('express');
const app = express();

app.listen(3000, () => console.log('Aplicação iniciada'));

// Middleware que transforma tudo que chega na API para Json
app.use(express.json());

app.route('/').post((req, res) => {
	const { nome, cidade, livros } = req.body; // const nome = req.body.nome, const cidade = req.body.cidade
	// res.send(`${nome} | ${cidade} | ${livros}`);
	res.send(livros);
	// console.log(`${nome} | ${cidade} | ${livros}`);
	console.log(...livros);
});
