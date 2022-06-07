const express = require('express');
const app = express();
const axios = require('axios');

app.listen(3000, () => console.log('Aplicação iniciada (http://127.0.0.1:3000)'));

// Middleware que transforma tudo que chega na API para Json
app.use(express.json());

app.route('/')
    .get((req, res) => {
        axios.get('https://api.github.com/users/da-ferreira')
        
            // Mostra a foto de usuário do GitHub
            .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
            .catch(err => console.log(err));
    });
