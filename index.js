const express = require('express');
const app = express();

app.listen(3000, () => console.log('Aplicação iniciada'));

// Middleware 'codifica' os dados para Json
app.use(express.json());

// app.route('/').post((req, res) => res.send(req.body));

let author = 'David';

app.route('/')
	.get((req, res) => res.send(author))
	.put((req, res) => {
		author = req.body.author;
		res.send(author);
		console.log(author);
	});

app.route('/:id').delete((req, res) => {
	res.send(req.params);
});
