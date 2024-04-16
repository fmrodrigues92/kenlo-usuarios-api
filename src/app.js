const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./infrastructure/web/routes');

const app = express();
app.use(express.json());
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error(err));

app.get('/', (req, res) => res.send('Usuário API - OK'));

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
