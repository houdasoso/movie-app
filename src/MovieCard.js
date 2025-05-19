
const MovieCard = ({ movie }) => (
  <div className="card h-100 shadow" style={{ width: '100%', maxWidth: '18rem' }}>
    <img src={movie.posterURL} className="card-img-top" alt={movie.title} style={{ height: '270px', objectFit: 'cover' }} />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{movie.title}</h5>
      <p className="card-text flex-grow-1">{movie.description}</p>
      <p className="card-text"><strong>⭐ {movie.rating}</strong></p>
    </div>
  </div>
);


export default MovieCard;