const express =require('express');
const cors = require('cors');
const routes = require('./routes/index.js');
const connectionDatabase = require('./database/index.js');

(async () => {
    await connectionDatabase();
})();

const app = express();
app.use(express.json());
app.use(cors());
routes(app);


module.exports = app;