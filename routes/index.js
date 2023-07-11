import express from 'express';

//Router creates an express instance defined
//in the main index
const router = express.Router();

router.get('/us', (req, res) => {

    const travel = "About us";
    //To show a view
    res.render('us', {
        travel
    })

});

router.get('/home', (req, res) => {
    
    const home = "Inicial page";
    res.render('home', {
        home
    })
})

export default router;