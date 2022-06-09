require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path')
const app = express();

app.use(express.static('todo/build'));
app.use(express.json());
app.use(cors({origin:"*"}));
app.use(cookieParser());
app.use("/todo", require('./router/route'))
//conect to DB
const url = process.env.MONGO_URL
mongoose.connect(url,err=>{
    if(err) throw err;
    console.log("DB Connect")
})
if(process.env.NODE_ENV ==="production"){
    app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'todo', 'build', 'index.html'));
    });
}


const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT || PORT,()=>{
    console.log(`App is running at http://localhost:${PORT}`)
})