import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

export const SearchedMovies = ({ moviesList }) => {

    return (
        <>
            { moviesList.length > 0 && (
                <ul>   
                    {moviesList.map(movie => (
                        <li key={movie.id}>
                            <Link to={`${movie.id}` }>
                                {movie.title ?? movie.original_title}
                            </Link>
                        </li>
                    ))}
                </ul>       
            )}
        </>
    )  
}

SearchedMovies.propTypes = {
    moviesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    original_title: PropTypes.string,
  }))
}