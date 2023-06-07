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
    const messages = ["Horrible", "Bad", "Fair", "Good", "Excellent !"];

    // generate the word in an h2 when a star is clicked. If nothing is selected, display default message
    const word = (rating > 0) && (rating <= messages.length) ? messages[rating - 1] : "Select a Rating";

    // dynamically generate an array with 5 Star components (index 0-4)
    // ratings will be set within the range of 1-5 using index + 1
    const stars = Array(5).fill().map((_, index) => 
        <Star 
            key={index} 
            selected={index < rating} // set color fill class on currently clicked star and previous stars
            onClick={() => handleRating(index + 1)} 
        />
    );

    return (
        <section className="rating-section">
            <div className="grid-container">
                <div className="rating-container">
                    <div className="flexbox stars">
                        {stars}
                    </div>
                    <h2>{word}</h2>
                </div>
            </div>
        </section>
    )
}

export default StarRating