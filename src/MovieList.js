import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => (
  <div className="row">
    {movies.map((movie, index) => (
      <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center">
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);

export default MovieList;
