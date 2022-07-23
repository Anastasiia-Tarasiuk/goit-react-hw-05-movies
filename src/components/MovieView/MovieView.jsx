import { Container, Poster, GenresList, GenresItem } from "./MovieView.styled";

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

