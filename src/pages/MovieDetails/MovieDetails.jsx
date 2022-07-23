import { Link, Outlet } from "react-router-dom";
import { MovieView } from "components/MovieView/MovieView";

export const MovieDetails = () => {

    return (
        <>
           <MovieView/>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </>
    )
}