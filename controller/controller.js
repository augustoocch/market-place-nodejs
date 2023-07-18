import { Travel } from '../model/Travel.js'


const homePage = (req, res) => {
   res.render('home', {
    nameSite: 'Home'
})};

const aboutUs = (req, res) => {
    res.render('us', {
        nameSite: 'About us'
    })
}

const testimonies = (req, res) => {
    res.render('testimonies', {
        nameSite: 'Testimonies'
    })
}

const travel =  async (req, res) => {
    
    //Get data in DB
    const trips = await Travel.findAll();
    console.log(trips);
    res.render('travel', {
        nameSite: 'Travel',
        findAllTrips: trips
    })
}

export {
    homePage,aboutUs, testimonies, travel
}