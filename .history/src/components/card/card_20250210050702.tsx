import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Like2Icon } from "../../assets/icons/like2-icon";
import { ProductType } from "../../service/type";
import { RootState } from "../../redux/store";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/reducers/wishlist-reducer";

export const Card = ({ id, thumbnail, title, rating, price }: ProductType) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isLiked = wishlist.some((item) => item.id === id);

  const handleLike = () => {
    if (isLiked) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist({ id, thumbnail, title, price }));
    }
  };

  return (
    <div className="w-[270px] xs:w-[200px] sm:w-[220px] md:w-[250px] lg:w-[270px]">
      <div className="bg-[#f5f5f5] rounded-[4px] relative">
        <Link to={`/product-detail/${id}`}>
          <img
            className="mb-[16px] w-full h-[200px] object-cover xs:h-[160px] sm:h-[180px] md:h-[200px]"
            src={thumbnail}
            alt="image"
          />
        </Link>
        <button
          onClick={handleLike}
          className={`absolute top-[17px] right-[17px] w-[30px] h-[30px] rounded-full flex items-center justify-center ${
            isLiked ? "bg-red-500 text-white" : "bg-white"
          }`}
        >
          <Like2Icon />
        </button>
      </div>
      <Link to={`/products/${id}`}>
        <h3 className="font-medium text-[16px] mb-[8px]">{title}</h3>
      </Link>
      <div className="flex gap-[10px]">
        <p className="font-medium text-[16px] text-[#db4444]">${price}</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};  
