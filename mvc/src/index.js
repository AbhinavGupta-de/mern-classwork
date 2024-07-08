const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8086;
const DB_URL = process.env.DB_URL;

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

mongoose
	.connect(DB_URL)
	.then(() => {
		console.log('Db Connected');
	})
	.catch((err) => {
		console.log('Db connection Failed', err);
	});

app.use('/api/products', productRoutes);

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
	console.log('Server sarted at port 8086');
});
