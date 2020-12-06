const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
require('dotenv').config();
const authRoutes = require('./src/routes/auth');
const app = express();
const {Sequelize} = require('sequelize')


const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime()+ '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

// const connection = process.env.DB_CONNECTION;
// console.log(connection);
// const host = process.env.DB_HOST;
// const port = process.env.DB_PORT;
// const database = process.env.DB_DATABASE;
// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;
// //Connect to database
// const sequelize = new Sequelize(database, username, password, {
//     host: host,
//     dialect: connection,
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     },
//     port: port
// });

app.use(bodyParser.json()); // type json
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'));

app.use((req, res, next)=> {
    // untuk mengatasi error cors origin
    res.setHeader('Access-Control-Allow-Origin', 'https://codepen.io');
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, FETCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
} )

app.use('/v1/auth', authRoutes);
app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data})
})

// get '/users/ ==> [{name: usup}]

app.listen(4000, async () => {
    // try {
    //     await sequelize.authenticate();
    //     console.log('Connection has been established successfully.');
    // } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    // }
});
