import { Travel } from '../model/Travel.js'
import { Review } from "../model/Review.js";

const homePage = (req, res) => {
   res.render('home', {
    nameSite: 'Home'
})};

const aboutUs = (req, res) => {
    res.render('us', {
        nameSite: 'About us'
    })
}

const reviews = async (req, res) => {

    try {
        const reviews = await Review.findAll();

        res.render('reviews', {
            nameSite: 'Reviews',
            reviews
        })   

    } catch (error) {
        console.log(error);
    }
}

const travel =  async (req, res) => {
    
    //Get data in DB
    const trips = await Travel.findAll();

    res.render('travel', {
        nameSite: 'Travel',
        findAllTrips: trips
    })
}


const detailTravel = async (req, res) => {

    const { slug } = req.params;

        try {
            const result = await Travel.findOne({ where : { slug } });
            res.render('detailTravel', {
                nameSite: `Travel to ${result.dataValues.title}`,
                result
            })
        } catch (error) {
            
        }
}



export {
    homePage,aboutUs, reviews, travel, detailTravel
}