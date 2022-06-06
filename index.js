const express = require('express');
const app = express();

app.listen(3000, () => console.log('Aplicação iniciada'));

// Middleware que transforma tudo que chega na API para Json
app.use(express.json());

app.route('/').get((req, res) => res.send('Olá'));

app.route('/:nome').get((req, res) => {
	res.send(req.params);
});

app.route('/identidade/:nome').get((req, res) => {
	res.send(req.params);
});
