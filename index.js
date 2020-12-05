const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');



const app = express();

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

app.use('/', () => {
    console.log('home');
});

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data})
})

// get '/users/ ==> [{name: usup}]

app.listen(4000, () => console.log('Connection Success'));
