require('dotenv').config(); // only needed locally

const mongoose = require('mongoose');

// const URI = "mongodb+srv://jaystack12:jay123@cluster0.zoep9wm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const URI = "mongodb://localhost:27017/Food-Admin-Panel";

mongoose.connect(URI)
    .then(() => console.log("DB Connected...."))
    .catch((err) => console.log("DB Not Connected....", err));
