import { Travel } from '../model/Travel.js'
import { Review } from "../model/Review.js";

const homePage = async (req, res) => {

    //Get the 3 travels from Travel model
    const promiseDb = []
    promiseDb.push(Travel.findAll({limit: 2}));
    promiseDb.push(Review.findAll({limit: 2}));
    try {
        const result = await Promise.all( promiseDb );
        res.render('home', {
            nameSite: 'Home',
            clase: 'home',
            trips: result[0],
            reviews: result[1]
        })

    }catch (error) {
        console.log(error);
    }
};

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
        trips
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