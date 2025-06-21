require('dotenv').config(); // only needed locally

const mongoose = require('mongoose');

const URI = process.env.MONGO_URL;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("DB Connected...."))
    .catch((err) => console.log("DB Not Connected....", err));
