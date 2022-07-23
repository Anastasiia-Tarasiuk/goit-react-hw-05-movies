import { Searchbar } from "components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { SearchedMovies } from "components/SearchedMovies/SearchedMovies";
import { apiMovieSearch } from "services/apiGetMovies/apiGetMovies";

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    
    const [searchParam, setSearchParam] = useState('');

    const handleGetData = (searchValue) => {
        setSearchParam(searchValue);
    }

    useEffect(() => {
        searchParam !== "" &&
        apiMovieSearch(searchParam, 1).then(res => setMovies(res.results));
    }, [searchParam]);

    return (
        <>
            <Searchbar onSubmit={handleGetData} />
            <SearchedMovies moviesList={movies} />
        </>
    );
};




