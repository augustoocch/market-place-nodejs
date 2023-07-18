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

    res.render('travel', {
        nameSite: 'Travel',
        findAllTrips: trips
    })
}


const detailTravel = async (req, res) => {

    const { slug } = req.params;

        try {
            const result = await Travel.findOne({ where : { slug } });
            console.log(result.dataValues.image);
            res.render('detailTravel', {
                nameSite: `Travel to ${result.dataValues.title}`,
                result
            })
        } catch (error) {
            
        }
}

export {
    homePage,aboutUs, testimonies, travel, detailTravel
}