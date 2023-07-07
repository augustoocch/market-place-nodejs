import express from 'express';

//Router creates an express instance defined
//in the main index
const router = express.Router();

router.get('/', (req, res) => {

    const trip = "Trip to germany";
    //To show a view
    res.render('us', {
        textTrip : trip, //Asi
        trip  //o asi
    })

});

export default router;