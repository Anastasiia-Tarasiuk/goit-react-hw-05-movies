import { apiGetMovieReviewsById } from "services/apiGetMovies/apiGetMovies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewsList } from "./Reviews.styled";

export const Reviews = () => {
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






        // <ul>
        //     {reviews
        //         ? reviews.map(review => 
        //             <li key={review.id}>
        //                 <p>Author: {review.author}</p>
        //                 <p>{review.content}</p>
        //             </li>)
        //     :<p>We don't have reviews</p>
        //     }
        // </ul>
    )
}