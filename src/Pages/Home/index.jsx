import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { APIKey } from "../../config/Key";
import { Container, MoveList, Movie } from "./styles";



function Home() {

  const [movies, setMovies] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500/';

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
  },[])

  return (
    <Container>
      <h1>Movies</h1>
      <MoveList>

        {movies.map(movie =>{
          return(
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
              <span>{movie.title}</span>
            </Movie>
          )
        })}

      </MoveList>
    </Container>
  );
}

export default Home;
