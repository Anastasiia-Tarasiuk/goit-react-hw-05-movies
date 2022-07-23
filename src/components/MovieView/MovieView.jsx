export const MovieView = ({ movieInfo }) => {

    const { poster_path, title, vote_average, overview, genres } = movieInfo;
    const url = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    return (
        <>        
            <img src={url} alt="Movie poster"/>
            <p>{title}</p>
            <p>User Score: {vote_average}%</p>
            <p>Overview</p>
            <p>{overview}</p>
            <p>Genres</p>
            <ul>
                {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
        </>
    )
}

