import { apiGetMovieCastById } from "services/apiGetMovies/apiGetMovies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Cast = () => {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        apiGetMovieCastById(movieId).then(res => setCast(res.cast));
    }, [movieId])

    console.log(cast);
    return (
        <ul>
            {cast && cast.map(item =>
                <li key={item.cast_id}>
                    <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt="Actor" />
                    <p>{item.name}</p>
                    <p>Character: {item.character}</p>
                </li>)}    
        </ul>
        )
}