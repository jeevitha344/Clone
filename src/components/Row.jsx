import { useSelector } from "react-redux";
import Card from "./Card";

const Row = () => {
  const movies = useSelector(
    (state) => state.movies.allMovies
  );

  return (
    <div className="flex gap-4 overflow-x-scroll">
      {movies.map((movie) => (
        <Card key={movie.imdb_id} movie={movie} />
      ))}
    </div>
  );
};

export default Row;
