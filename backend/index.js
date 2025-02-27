const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');
const db = require('./configs/db.config');
const app = express();

app.use(express.json());
app.use(cookieParser({}));
app.use(cors({}));

const port = process.env.PORT || 5001;
db();
app.listen(port,()=>{
    console.log(`Server is running on ${port} port...`);
})