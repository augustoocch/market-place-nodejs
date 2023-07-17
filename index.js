import express from "express";
import router from "./routes/index.js";

const app = express();

//MIDDLEWARE WITH EXPRESS
//Define port
const port = process.env.PORT || 4000;

//Add router. This support all http methods
app.use('/', router);

//Add pug template engine
app.set('view engine', 'pug');

//Define year to the footer
app.use( (req, res, next) => {
    
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nameSite= "Travel Agency"
    console.log(res.locals);
    
    next();
});

//Defining folder public as static folder for express
app.use(express.static('public'));

app.listen(port, ()=> {
    console.log(`Server working on port ${port}`);
})