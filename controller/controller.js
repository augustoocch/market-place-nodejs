
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

const travel = (req, res) => {
    res.render('travel', {
        nameSite: 'Travel'
    })
}

export {
    homePage,aboutUs, testimonies, travel
}