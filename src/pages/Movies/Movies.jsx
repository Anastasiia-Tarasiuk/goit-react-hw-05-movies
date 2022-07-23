import { Searchbar } from "components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { SearchedMovies } from "components/SearchedMovies/SearchedMovies";
import { apiMovieSearch } from "services/apiGetMovies/apiGetMovies";
import { GoBackButton } from "components/GoBackButton/GoBackButton";
import { Link, useSearchParams } from "react-router-dom";


const Movies = () => {
    

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");

  
    const [movies, setMovies] = useState([]);
    
    const [searchQuery, setSearchQuery] = useState('');


    const handleGetData = (searchValue) => {
        setSearchQuery(searchValue);
        setSearchParams(`query=${searchValue}`);
    }

 

    console.log(query)

    useEffect(() => {
        searchQuery !== "" &&
        apiMovieSearch(searchQuery, 1).then(res => setMovies(res.results));
    }, [searchQuery]);











    
    // const [movies, setMovies] = useState([]);
    
    // const [searchQuery, setSearchQuery] = useState('');


    // const handleGetData = (searchValue) => {
    //     setSearchQuery(searchValue);
    // }


    // useEffect(() => {
    //     searchQuery !== "" &&
    //     apiMovieSearch(searchQuery, 1).then(res => setMovies(res.results));
    // }, [searchQuery]);

    return (
        <>
            <Link to='/'><GoBackButton/></Link>
            <Searchbar onSubmit={handleGetData} />
            <SearchedMovies moviesList={movies} query={searchQuery} />
        </>
    );
};

export default Movies;



