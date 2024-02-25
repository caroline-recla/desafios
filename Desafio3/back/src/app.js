import express from "express";
import cors from 'cors';
import routes from './routes/index.js'
import conectaDatabase from './config/dbConnect.js'

const conexao = await conectaDatabase();

conexao.on("error", (erro) => {
    console.log("erro na conexao", erro);
})

conexao.once("open", () => {
    console.log("Conexao feita");
});


const app = express();
app.use(express.json());
app.use(cors());
routes(app);


export default app;