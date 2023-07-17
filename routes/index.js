import express from 'express';

//Router creates an express instance defined
//in the main index
const router = express.Router();

router.get('/home', (req, res) => {

    //To show a view
    res.render('home', {
        initialHeader: 'Home'
    });

});

router.get('/us', (req, res) => {
    res.render('us', {
        initialHeader: 'About us'
    });
});

router.get('/travel', (req, res) => {
    res.render('travel', {
        initialHeader: 'Travel'
    });
});

router.get('/testimonies', (req, res) => {
    res.render('testimonies', {
        initialHeader: 'Testimonies'
    });
});

router.get('/home', (req, res) => {
    
    const home = "Inicial page";
    res.render('home', {
        home
    })
})

export default router;