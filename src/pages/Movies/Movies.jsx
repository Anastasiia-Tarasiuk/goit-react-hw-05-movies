import { Searchbar } from "components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { SearchedMovies } from "components/SearchedMovies/SearchedMovies";
import { apiMovieSearch } from "services/apiGetMovies/apiGetMovies";
import { GoBackButton } from "components/GoBackButton/GoBackButton";
import { Link, useSearchParams } from "react-router-dom";


const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        query !== "" &&
        apiMovieSearch(query, 1).then(res => setMovies(res.results));
    }, [query]);

    const handleGetData = (searchValue) => {
        setSearchParams({query: searchValue})
    }

    return (
        <>
            <Link to='/'><GoBackButton/></Link>
            <Searchbar onSubmit={handleGetData} />
            <SearchedMovies moviesList={movies} />
        </>
    );
};

export default Movies;



