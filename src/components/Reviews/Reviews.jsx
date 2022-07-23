import { apiGetMovieReviewsById } from "services/apiGetMovies/apiGetMovies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        apiGetMovieReviewsById(movieId).then(res => setReviews(res.results));
    }, [movieId])

    return (
        <>
            {reviews.length > 0 
                ? <ul>
                    {reviews.map(review =>
                        <li key={review.id}>
                            <p>Author: {review.author}</p>
                            <p>{review.content}</p>
                        </li>
                    )}
                </ul>           
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