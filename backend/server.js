const express = require('express');
const dotenv = require('dotenv');
dotenv.config({});
const data = require('./utils/db');
const app = express();
const user = require('./routes/userRoute');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api/user', user);

app.listen(PORT, ()=>{
    console.log(`server running on port:${PORT}`);
});