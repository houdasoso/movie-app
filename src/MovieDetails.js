import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies[parseInt(id)];

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className="card p-4 shadow-sm">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className="ratio ratio-16x9 mb-3">
        <iframe
          src={movie.trailer}
          title="Movie Trailer"
          allowFullScreen
        ></iframe>
      </div>
      <button className="btn btn-secondary" onClick={() => navigate('/')}>⬅ Back to Home</button>
    </div>
  );
};

export default MovieDetails;
