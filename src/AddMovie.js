import React, { useState } from 'react';

const AddMovie = ({ handleAddMovie }) => {
  const [showForm, setShowForm] = useState(false); // toggle form
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const toggleForm = () => {
    setShowForm(!showForm); // toggle form visibility
  };

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
    setShowForm(false); // hide form after submit
  };

  return (
    <div className="my-3">
      <button className="btn btn-primary mb-3" onClick={toggleForm}>
        {showForm ? 'Hide Form' : 'Add Movie'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="card p-3 shadow-sm">
          <input
            type="text"
            name="title"
            className="form-control mb-2"
            placeholder="Title"
            value={newMovie.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            className="form-control mb-2"
            placeholder="Description"
            value={newMovie.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="posterURL"
            className="form-control mb-2"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="rating"
            className="form-control mb-2"
            placeholder="Rating (1–5)"
            value={newMovie.rating}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-success">
            Submit Movie
          </button>
        </form>
      )}
    </div>
  );
};

export default AddMovie;
