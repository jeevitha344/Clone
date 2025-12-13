import { useDispatch } from "react-redux";
import { selectMovie } from "../store/movieSlice";
import { useNavigate } from "react-router-dom";

const Cart = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(selectMovie(movie));
    navigate("/player");
  };

  return (
    <img
      src={movie.image_url}
      alt={movie.title}
      onClick={handleClick}
      className="w-[200px] h-[120px] cursor-pointer hover:scale-110"
    />
  );
};

export default Cart;
