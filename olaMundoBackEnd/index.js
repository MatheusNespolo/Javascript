const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// ativar cors
app.use(cors());

// rota que retorna o json com a mensagem
app.get('/api/mensagem', (req,res)=>{
    res.json({mensagem: 'Olá, Mundo!'})
});

// iniciar servidor
app.listen(port,() => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});