import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LikeIcon } from "../../assets/icons/like-icon";
import { CartIcon } from "../../assets/icons/cart-icon";
import { UserIcon } from "../../assets/icons/user-icon";
import { RootState } from "../../redux/store";

export const Header = () => {
    const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);
    const navigate = useNavigate();

    // Tokenni tekshirish
    const isAuthenticated = !!localStorage.getItem("token");

    const handleUserClick = () => {
        if (isAuthenticated) {
            navigate("/profile");
        } else {
            navigate("/login");
        }
    };

    return (
        <header>
            <div className="bg-[#000] py-[12px]">
                <div className="container max-w-[1170px] mx-auto">
                    <div>
                        <p className="font-normal text-[#fafafa] text-[14px] text-center leading-[150%]">
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-[28px] border-b-[1px] border-b-[#B3B3B3]">
                <div className="container max-w-[1170px] mx-auto">
                    <div className="flex items-center justify-between">
                        <Link className="font-bold text-[24px]" to={"/"}>
                            Exclusive
                        </Link>
                        <div className="flex gap-[48px]">
                            <Link className="font-normal text-[16px]" to={"/"}>Home</Link>
                            <Link className="font-normal text-[16px]" to={"/contact"}>Contact</Link>
                            <Link className="font-normal text-[16px]" to={"/about"}>About</Link>
                            <Link className="font-normal text-[16px]" to={"/shop"}>Shop</Link>
                        </div>
                        <div className="flex items-center gap-[16px]">
                            <Link to={"/wishlist"} className="relative">
                                <LikeIcon />
                                {wishlistCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                        {wishlistCount}
                                    </span>
                                )}
                            </Link>
                            <Link to={"/cart"}><CartIcon /></Link>
                            <button onClick={handleUserClick} className="cursor-pointer">
                                <UserIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
