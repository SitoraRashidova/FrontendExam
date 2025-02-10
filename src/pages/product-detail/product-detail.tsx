import { useParams } from "react-router-dom";
import { useSingleProduct } from "../../service/query/useSingleProduct";
import { LikeIcon } from "../../assets/icons/like-icon";
import { DeliveryIcon } from "../../assets/icons/delivery-icon";
import { ReturnIcon } from "../../assets/icons/return-icon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/reducers/wishlist-reducer";

export const ProductDetail = () => {
  const { id } = useParams();
  const productId = Number(id);
  const { data, isLoading } = useSingleProduct(productId);

  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlist.some((item) => item.id === productId);

  const handleWishlistToggle = () => {
    if (data) {
      if (isInWishlist) {
        dispatch(removeFromWishlist(productId));
      } else {
        dispatch(
          addToWishlist({
            id: data.id,
            title: data.title,
            price: data.price,
            thumbnail: data.thumbnail,
          })
        );
      }
    }
  };

  return (
    <div className="container max-w-[1170px] mx-auto py-[40px] md:py-[80px] px-4">
      {isLoading ? (
        <p className="text-center text-lg font-semibold">Loading...</p>
      ) : (
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-[30px]">
            <ul className="flex md:flex-col gap-2 md:gap-[16px]">
              <li className="w-[90px] md:w-[170px] rounded-[4px] bg-[#f5f5f5]">
                <img src={data?.thumbnail} alt="image" />
              </li>
              <li className="w-[90px] md:w-[170px] rounded-[4px] bg-[#f5f5f5]">
                <img src={data?.thumbnail} alt="image" />
              </li>
              <li className="w-[90px] md:w-[170px] rounded-[4px] bg-[#f5f5f5]">
                <img src={data?.thumbnail} alt="image" />
              </li>
            </ul>
            <div className="w-full md:w-[500px] rounded-[4px] bg-[#f5f5f5]">
              <img
                className="w-full object-cover"
                src={data?.thumbnail}
                alt="image"
              />
            </div>
          </div>
          <div className="w-full md:w-[400px]">
            <h2 className="font-semibold text-[20px] md:text-[24px] mb-[12px] md:mb-[16px]">
              {data?.title}
            </h2>
            <p className="font-normal text-[20px] md:text-[24px] mb-[16px] md:mb-[24px]">
              ${data?.price}
            </p>
            <p className="font-normal text-[14px] pb-[16px] md:pb-[24px] border-b-[1px] border-b-[#808080] mb-[16px] md:mb-[24px]">
              {data?.description}
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-4 md:mb-[40px]">
              <div className="border-[#808080] border-[1px] rounded-[4px] flex justify-between items-center w-full md:w-[160px] h-[44px]">
                <button className="w-[40px] border-r-[#808080] border-r-[1px] text-[24px] md:text-[28px] font-semibold">
                  -
                </button>
                <p className="font-medium text-[18px] md:text-[20px]">1</p>
                <button className="w-[40px] bg-[#DB4444] text-[#fff] text-[24px] md:text-[28px] font-semibold">
                  +
                </button>
              </div>
              <button className="w-full md:w-auto rounded-[4px] py-[8px] md:py-[10px] px-[32px] md:px-[48px] bg-[#DB4444] text-[#fff] text-[14px] md:text-[16px] font-semibold">
                Buy Now
              </button>
              <button
                onClick={handleWishlistToggle}
                className={`border-[#808080] border-[1px] rounded-[4px] w-[40px] h-[40px] flex items-center justify-center ${
                  isInWishlist ? "bg-[#DB4444]" : ""
                }`}
              >
                <LikeIcon />
              </button>
            </div>
            <div className="border-[#808080] border-[1px] rounded-[4px] mt-4">
              <div className="pt-[16px] md:pt-[24px] pl-[12px] md:pl-[16px] pb-[12px] md:pb-[16px] border-b-[#808080] border-b-[1px] flex items-center gap-[12px] md:gap-[16px]">
                <DeliveryIcon />
                <div>
                  <p className="font-medium text-[14px] md:text-[16px] mb-[6px] md:mb-[8px]">
                    Free Delivery
                  </p>
                  <p className="font-medium text-[10px] md:text-[12px]">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="pt-[16px] md:pt-[24px] pl-[12px] md:pl-[16px] pb-[12px] md:pb-[16px] flex items-center gap-[12px] md:gap-[16px]">
                <ReturnIcon />
                <div>
                  <p className="font-medium text-[14px] md:text-[16px] mb-[6px] md:mb-[8px]">
                    Return Delivery
                  </p>
                  <p className="font-medium text-[10px] md:text-[12px]">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
