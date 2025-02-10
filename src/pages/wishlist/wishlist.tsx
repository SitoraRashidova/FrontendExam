import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../../redux/reducers/wishlist-reducer";
import { RootState } from "../../redux/store";
import { Like2Icon } from "../../assets/icons/like2-icon";

export const Wishlist = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="container max-w-[1170px] mx-auto py-[30px] px-4">
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-10">
          You have not added a product yet 😔
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="w-full sm:w-[270px]">
              <div className="bg-[#f5f5f5] rounded-[4px] relative">
                <Link to={`/product-detail/${item.id}`}>
                  <img
                    className="mb-[16px] w-full"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                </Link>
                <button
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                  className="absolute top-[10px] right-[10px] w-[30px] h-[30px] rounded-full flex items-center justify-center bg-red-500 text-white"
                >
                  <Like2Icon />
                </button>
              </div>
              <Link to={`/products/${item.id}`}>
                <h3 className="font-medium text-[16px] mb-[8px]">
                  {item.title}
                </h3>
              </Link>
              <div className="flex gap-[10px]">
                <p className="font-medium text-[16px] text-[#db4444]">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
