var express = require('express');
var app = express();

const mongoose = require('mongoose');
const bodyparser = require('body-parser'); 
const cors = require('cors');
const path = require('path');

const routes = require('./routes/router');

const port = 3000;

app.use(cors());
app.use(bodyparser.json());

app.use("/api", routes);

//mongoose---------------
mongoose.connect("mongodb://localhost:27017/employees", {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on("connected", ()=>{
    console.log("connected to database MongoDb @ 27017");

});
mongoose.connection.on("error", (err)=>{
    if (err) {
        console.log("Error in database connection : " + err);
    }
})
//mongoose---------------


app.get('/', (req,res)=>{
    res.send('Response recieved from the Server...!');
});
app.listen(port,()=> console.log('working on ' + port));