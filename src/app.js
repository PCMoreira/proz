require("dotenv").config();
const express = require("express");
const router = require('./routes/student-manager');
const amqp = require('./startup/amqp');
const db = require('./db');

const app = express();
const PORT = process.env.APP_PORT || 3000;

amqp.consume();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);


db.sync(() =>
    console.log(`🚀 Database is Up: ${process.env.DB_NAME}`)
);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
