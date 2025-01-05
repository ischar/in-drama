import { Link } from "react-router-dom";
import { API } from "../../utils/config";
export default function Drama({ image, title }) {
  return (
    <Link to={`/location/${title}`}>
      <div className="w-48 h-54 mx-2 text-white flex items-center justify-center text-xl z-10">
        <img
          className="h-full w-full"
          src={`${API.THUMBNAIL}${image}`}
          alt={title}
        />
      </div>
    </Link>
  );
}
