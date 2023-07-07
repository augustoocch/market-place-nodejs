import express from "express";
import router from "./routes/index.js";

const app = express();


//Define port
const port = process.env.PORT || 4000;

//Add router. This support all http methods
app.use('/', router);

//Add pug template engine
app.set('view engine', 'pug');

app.listen(port, ()=> {
    console.log(`Server working on port ${port}`);
})