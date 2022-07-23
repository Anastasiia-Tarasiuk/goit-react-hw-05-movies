import { apiTrandingMoves } from "services/apiGetMovies/apiGetMovies";
import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";

export const Home = () => {

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    apiTrandingMoves().then(res => setTrendingMovies(res.results));
  }, []);

  return (
    <>
      <p>Trending today</p>
      {trendingMovies.length > 0 && (
        <ul>
          {trendingMovies.map(item => (
    
            <li key={item.id}>
              <Link to={`movies/${item.id}` }>
                {item.title ?? item.original_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};