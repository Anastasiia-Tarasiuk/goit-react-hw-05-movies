import { apiTrandingMovies } from "services/apiGetMovies/apiGetMovies";
import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import { Title } from "./Home.styled";

const Home = () => {

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    apiTrandingMovies().then(res => setTrendingMovies(res.results));
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {trendingMovies.length > 0 && (
        <ul>
          {trendingMovies.map(item => (    
            <li key={item.id} >
              <Link to={`movies/${item.id}`}>
                {item.title ?? item.original_name} 
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;