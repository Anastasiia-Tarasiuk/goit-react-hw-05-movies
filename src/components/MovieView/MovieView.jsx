import { Container, Poster, GenresList, GenresItem } from "./MovieView.styled";
import PropTypes from 'prop-types'; 

export const MovieView = ({ movieInfo }) => {
  
    const { poster_path, title, vote_average, overview, genres, release_date } = movieInfo;
    const url = `https://image.tmdb.org/t/p/w300/${poster_path}`;

    return (
        <Container>        
            <Poster src={url} alt="Movie poster"/>
            <div>
                <h2>{title} {release_date.slice(0, 4)}</h2>
                <p>User Score: {(vote_average*10).toFixed(0)}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <GenresList>
                    {genres.map(genre => <GenresItem key={genre.id}>{genre.name}</GenresItem>)}
                </GenresList>
            </div>
        </Container>
    )
}

MovieView.propTypes = {
    onSubmit: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }))
    })
}