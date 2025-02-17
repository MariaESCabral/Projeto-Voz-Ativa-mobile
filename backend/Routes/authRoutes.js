///////////////////////////////////////////////////////////////////////////////////////////////////////
// Arquivo de rotas de autenticação
///////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Importando dependências necessárias
///////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express'); // Importando o Express
const authController = require('../controllers/authController'); // Importando o controller de autenticação
const router = express.Router(); // Criando um router para as rotas

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Rota para realizar o login
///////////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/login', authController.login); // Definindo a rota para realizar o login
module.exports = router; // Exportando o router das rotas de autenticação

///////////////////////////////////////////////////////////////////////////////////////////////////////