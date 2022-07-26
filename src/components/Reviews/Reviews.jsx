import { apiGetMovieReviewsById } from "services/apiGetMovies/apiGetMovies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewsList } from "./Reviews.styled";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        apiGetMovieReviewsById(movieId).then(res => setReviews(res.results));
    }, [movieId])

    return (
        <>
            {reviews.length > 0 
                ? <ReviewsList>
                    {reviews.map(review =>
                        <li key={review.id}>
                            <p><b>Author: {review.author}</b></p>
                            <p>{review.content}</p>
                        </li>
                    )}
                </ReviewsList>           
                : <p>We don't have reviews</p>
            }            
        </>
    )
}

export default Reviews;