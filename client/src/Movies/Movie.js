import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie({ addToSavedList, movieList, setMovieList }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const history = useHistory()

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const edit = () => {
    history.push(`/update-movie/${params.id}`)
  }

  const deleteMovie = (e) => {
    e.preventDefault()
    axios
    .delete(`http://localhost:5000/api/movies/${movie.id}`)
    .then(res => {
      setMovieList(movieList)
      history.pushState('/')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      
      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
      <button onClick={edit}>Edit</button>
      <button onClick={deleteMovie}>Delete</button>
    </div>
  );
}

export default Movie;
