import { Review } from "../model/Review.js";


const saveReview = async (req, res) => {
    
    //Validate
    const error=[]
    const { name, email, review} = req.body;
    
    if (name.trim() === "" || email.trim() === "" || review.trim() === "") {
        error.push({message: "Form has empty values"})
        console.log("Empty name")
    }

    if (error.length > 0) {
        const allReviews = await Review.findAll();
        res.render("reviews", {
            nameSite: 'Reviews',
            errors: error,
            name,
            email,
            review,
            allReviews
        })
    } else {
        try {
            await Review.create({
                name: name,
                email: email,
                review: review
            });
            res.redirect("/reviews");
        } catch (error) {
            console.log(error);
        }
        
    }
    console.log(req.body);
}

const getReviews = async (req, resp) => {

}

export {
    saveReview
}