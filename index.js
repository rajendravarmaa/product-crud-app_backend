const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);



app.get('/', (req, res) => {
    res.send("Hello from node API Server");
});




mongoose.connect("mongodb+srv://user:sample@fbackenddb.bke3hj4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=fBackendDB")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });

