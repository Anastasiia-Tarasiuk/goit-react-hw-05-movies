import { apiGetMovieCastById } from "services/apiGetMovies/apiGetMovies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CastList } from "./Cast.styled";

const Cast = () => {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        apiGetMovieCastById(movieId).then(res => setCast(res.cast));
    }, [movieId])

    return (
        <>
            {cast && 
                <CastList>
                    {cast.map(item =>
                        <li key={item.cast_id}>
                            {item.profile_path
                                ? <img src={`https://image.tmdb.org/t/p/w200${item.profile_path}`} alt="Actor" />
                                : <p>No picture :(</p>}
                            <p>{item.name}</p>
                            <p>Character: {item.character}</p>
                        </li>)}    
                </CastList>
            }
        </>
        )
}


export default Cast;