import { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import MovieDetails from './MovieDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "the princesse diaries",
      description: "Mia Thermopolis est une jeune fille timide et discrète...",
      posterURL: "the princesse diaries.jpg",
      rating: 3,
      trailer: 'https://www.youtube.com/embed/CzcGwB7qat8',
    },
    {
      title: "stich",
      description: "Stitch and Lilo find their friend, Jumba...",
      posterURL: "stich.jpg",
      rating: 4,
      trailer: 'https://www.youtube.com/embed/VWqJifMMgZE',
    },
  ]);

  const [filter, setFilter] = useState({ title: '', rating: 0 });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
    movie.rating >= filter.rating
  );

  return (
    <Router>
      <div className="container">
        <h1>🎬 Best Movies</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setFilter={setFilter} />
                <AddMovie handleAddMovie={handleAddMovie} />
                <div className="movie-list">
                  <MovieList movies={filteredMovies} />
                </div>
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
