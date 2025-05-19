import  { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "the princesse diaries",
      description: "Mia Thermopolis est une jeune fille timide et discrète qui mène une existence paisible à San Francisco. Un beau jour, la grand-mère de Mia, la très stricte Clarisse Renaldi, vient lui rendre visite. Originaire de Génovie, un petit royaume perdu quelque part sur le vieux continent, elle annonce à Mia qu'elle est l'unique héritière du trône. Avant d'être nommée princesse, celle-ci devra apprendre quelques règles de bonne conduite.",
      posterURL: "the princesse diaries.jpg",
      rating: 3,
    },
    {
      title: "stich",
      description: "Stitch and Lilo find their friend, Jumba, abducted by an alien. Soon, the alien demands a ransom for Jumba's release and the duo must do everything to get Jumba back.",
      posterURL: "stich.jpg",
      rating: 4,
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
  <div className="container">
    <h1>🎬 Best Movies </h1>
    <Filter setFilter={setFilter} />
    <AddMovie handleAddMovie={handleAddMovie} />
    <div className="movie-list">
      <MovieList movies={filteredMovies} />
    </div>
  </div>
);
};

export default App;
