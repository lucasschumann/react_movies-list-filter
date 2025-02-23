import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Movie {
  [key: string]: string;
}

interface Props {
  movies: Movie[];
}

export const MoviesList = ({ movies }: Props) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
