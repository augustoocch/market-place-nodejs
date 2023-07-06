import express from "express";
const app = express()


//Define port
const port = process.env.PORT || 4000;

//Define methods
app.get('/', (req, res) => {

    //Para mostrar algo en pantalla
    res.send("Hello there");
    
    //Para responder un json
    res.json({
        id: 1
    });

    //Para mostrar una vista
    res.render()

});

app.listen(port, ()=> {
    console.log(`Server working on port ${port}`);
})