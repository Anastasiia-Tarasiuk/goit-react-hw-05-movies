import { Link, Outlet, useParams } from "react-router-dom";
import { MovieView } from "components/MovieView/MovieView";
import { apiGetMovieInfoById } from "services/apiGetMovies/apiGetMovies";
import { useState, useEffect } from "react";
import { GoBackButton } from "components/GoBackButton/GoBackButton";
import { InfoBox, InfoList } from "./MovieDetails.styled";

const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState(null);
    const { movieId } = useParams('');
    const [error, setError] = useState(null);

    useEffect(() => {
        apiGetMovieInfoById(movieId)
            .then(res => setMovieInfo(res))
            .catch(error => {
                const msgForApiBadRespond = "Something went wrong.";
                setError(msgForApiBadRespond);
                console.log(error); 
            });    
    }, [movieId])
    
    return (
        <>
            <Link to='/'><GoBackButton/></Link>
            {movieInfo && <MovieView movieInfo={movieInfo} />}     
            <InfoBox>
                <p>Additional information</p>
                {error
                    ? <p>Here is no info :(</p>
                    : (<InfoList>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </InfoList>)}
                <Outlet />
            </InfoBox>
        </>
    )
}

export default MovieDetails;