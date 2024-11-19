//Imports

import express from 'express'
import router from './routes.js';
import bodyParser from 'body-parser';

//Variáveis iniciáis

const PORT = process.env.APP_PORT || 8081;
const app = express();


//Inicialização do servidor

const iniciarServidor = async () => {
  try {
    app.use(express.json())
    app.use('/api', router)
    app.listen(PORT, () => {
    console.log("rodando certin");
    });

  } catch (e) {
    console.log(e);
  }
};

iniciarServidor();