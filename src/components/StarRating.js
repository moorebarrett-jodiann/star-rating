import { useState } from "react";
import Star from "./Star";

function StarRating() {
    // initialie rating variable and setRating method with initial rating value of 0
    const [rating, setRating] = useState(0);

    // method to set the rating value as rating + 1
    const handleRating = (selectedStar) => {
        setRating(selectedStar);
    } 

    // define message array to have a description correspond with each star clicked
    const messages = ["Horrible", "Bad", "Fair", "Good", "Excellent"];

    // generate the word in an h2 when a star is clicked. If nothing is selected, display default message
    const word = (rating > 0) && (rating <= messages.length) ? messages[rating - 1] : "Select a Rating";

    // dynamically generate an array with 5 Star components (index 0-4)
    const stars = Array(5).fill().map((_, index) => 
        <Star 
            key={index} 
            selected={index < rating}
            onClick={() => handleRating(index + 1)} 
        />
    );

    return (
        <section>
            <div className="rating-container">
                <div className="flexbox stars">
                    {stars}
                </div>
                <h2>{word}</h2>
            </div>
        </section>
    )
}

export default StarRating