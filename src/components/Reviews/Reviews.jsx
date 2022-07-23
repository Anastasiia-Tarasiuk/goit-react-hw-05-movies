import { apiGetMovieReviewsById } from "services/apiGetMovies/apiGetMovies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Reviews = () => {
    const [reviews, setReviews] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        // movieId &&
        apiGetMovieReviewsById(movieId).then(res => setReviews(res.results));
    }, [movieId])

    // console.log(reviews);

    return <div>Reviews!</div>
}