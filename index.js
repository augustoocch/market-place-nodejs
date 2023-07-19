import express from "express";
import router from "./routes/index.js";
import db from './config/db.js';

const app = express();


//Connect DB
db.authenticate()
    .then(() => {
        console.log("DB connected")
    }).catch( err => {
        console.log(err);
    })
    

//MIDDLEWARE WITH EXPRESS
//Define port
const port = process.env.PORT || 4000;

//Add pug template engine
app.set('view engine', 'pug');

//Define year to the footer
app.use( (req, res, next) => {
    
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nameSite= "Travel Agency"
    
    next();
});

//Add body parser to read form data
app.use(express.urlencoded({extended: true}));

//Defining folder public as static folder for express
app.use(express.static('public'));

//Add router. This support all http methods
app.use('/', router);

app.listen(port, ()=> {
    console.log(`Server working on port ${port}`);
})