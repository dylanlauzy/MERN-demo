const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5500;

const app = express();

app.use(express.json()) // to allow for receiving of json body from call
app.use(express.urlencoded({ extended: false })) // to allow for receiving of urlencoded body from call

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));