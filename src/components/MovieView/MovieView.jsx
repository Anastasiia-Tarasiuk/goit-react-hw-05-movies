import { Container, Poster, GenresList, GenresItem } from "./MovieView.styled";
import PropTypes from 'prop-types'; 

export const MovieView = ({ movieInfo }) => {
  
    const { poster_path, title, vote_average, overview, genres } = movieInfo;
    const url = `https://image.tmdb.org/t/p/w300/${poster_path}`;

    return (
        <Container>        
            <Poster src={url} alt="Movie poster"/>
            <div>
                <p><b>{title}</b></p>
                <p>User Score: {vote_average}%</p>
                <p><b>Overview</b></p>
                <p>{overview}</p>
                <p><b>Genres</b></p>
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