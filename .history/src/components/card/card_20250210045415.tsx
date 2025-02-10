import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Like2Icon } from "../../assets/icons/like2-icon";
import { ProductType } from "../../service/type";
import { RootState } from "../../redux/store";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/reducers/wishlist-reducer";

// Import Swiper for multiple images
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const Card = ({ id, images, title, rating, price }: ProductType) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isLiked = wishlist.some((item) => item.id === id);

  const handleLike = () => {
    if (isLiked) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist({ id, images, title, price }));
    }
  };

  return (
    <div className="w-[270px] sm:w-[220px] md:w-[240px]">
      <div className="bg-[#f5f5f5] rounded-[4px] relative">
        {/* Swiper Image Slider */}
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mb-[16px] w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Link to={`/product-detail/${id}`}>
                <img
                  className="w-full h-[180px] object-cover"
                  src={img}
                  alt={`image-${index}`}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

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
        <h3 className="font-medium text-[16px] mb-[8px] sm:text-[14px] md:text-[15px]">
          {title}
        </h3>
      </Link>

      <div className="flex gap-[10px]">
        <p className="font-medium text-[16px] text-[#db4444] sm:text-[14px] md:text-[15px]">
          ${price}
        </p>
        <p className="text-sm sm:text-xs md:text-sm">⭐ {rating}</p>
      </div>
    </div>
  );
};
