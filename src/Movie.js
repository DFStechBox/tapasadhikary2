

const Movie = ({ movie }) => {
  
  return (
    <li className="movie" key={movie.id}>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.title}</p>
      <p>by {movie.director} was released in {movie.year}</p>
      <p>Ratings: {movie.rating}</p>
    </li>
  )
};

export default Movie;
