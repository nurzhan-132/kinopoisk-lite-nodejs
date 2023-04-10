const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/kinopoisk').then(() => {
    console.log('Connected to MongoDB Kinopoisk');
}).catch((e) => {
    console.log('Failed to load MongoDB');
})