
const saveReview = async (req, res) => {
    
    //Validate
    const error=[]
    const { name, email, review} = req.body;
    
    if (name.trim() === "") {
        error.push({message: "Empty name"})
        console.log("Empty name")
    }
    if (email.trim() === "") {
        error.push({message: "Empty email"})
        console.log("Empty email")
    }
    if (review.trim() === "") {
        error.push({message: "Empty review"})
        console.log("Empty review")
    }
    console.log(req.body);
}



export {
    saveReview
}