import { Link } from 'react-router-dom';

const MovieCard = ({ movie, index }) => (
  <Link to={`/movie/${index}`} className="text-decoration-none text-dark">
    <div className="card h-100 shadow" style={{ width: '100%', maxWidth: '18rem' }}>
      <img src={movie.posterURL} className="card-img-top" alt={movie.title} style={{ height: '270px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text flex-grow-1">{movie.description.slice(0, 80)}...</p>
        <p className="card-text"><strong>⭐ {movie.rating}</strong></p>
      </div>
    </div>
  </Link>
);

export default MovieCard;
