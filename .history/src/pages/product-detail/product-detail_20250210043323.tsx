// import { useParams } from "react-router-dom";
// import { useSingleProduct } from "../../service/query/useSingleProduct";
// import { LikeIcon } from "../../assets/icons/like-icon";
// import { DeliveryIcon } from "../../assets/icons/delivery-icon";
// import { ReturnIcon } from "../../assets/icons/return-icon";

// export const ProductDetail = () => {
//     const { id } = useParams();
//     const productId = Number(id);

//     const { data, isLoading } = useSingleProduct(productId);

//     return (
//         <div className="container max-w-[1170px] mx-auto py-[80px]">
//             {isLoading ? (
//                 <p className="text-center text-lg font-semibold">Loading...</p>
//             ) : (
//                 <div className="flex justify-between">
//                     <div className="flex gap-[30px]">
//                         <ul className="flex flex-col gap-[16px]">
//                             <li className="w-[170px] rounded-[4px] bg-[#f5f5f5]">
//                                 <img src={data?.thumbnail} alt="image" />
//                             </li>
//                             <li className="w-[170px] rounded-[4px] bg-[#f5f5f5]">
//                                 <img src={data?.thumbnail} alt="image" />
//                             </li>
//                             <li className="w-[170px] rounded-[4px] bg-[#f5f5f5]">
//                                 <img src={data?.thumbnail} alt="image" />
//                             </li>
//                         </ul>
//                         <div className="w-[500px] rounded-[4px] bg-[#f5f5f5]">
//                             <img className="w-full object-cover" src={data?.thumbnail} alt="image" />
//                         </div>
//                     </div>
//                     <div className="w-[400px]">
//                         <h2 className="font-semibold text-[24px] mb-[16px]">{data?.title}</h2>
//                         <p className="font-normal text-[24px] mb-[24px]">${data?.price}</p>
//                         <p className="font-normal text-[14px] pb-[24px] border-b-[1px] border-b-[#808080] mb-[24px]">{data?.description}</p>
//                         <div className="flex justify-between mb-[40px]">
//                             <div className="border-[#808080] border-[1px] rounded-[4px] flex justify-between items-center w-[160px] h-[44px]">
//                                 <button className="w-[40px] border-r-[#808080] border-r-[1px] text-[28px] font-semibold">-</button>
//                                 <p className="font-medium text-[20px]">1</p>
//                                 <button className="w-[40px] bg-[#DB4444] text-[#fff] text-[28px] font-semibold">+</button>
//                             </div>
//                             <button className="rounded-[4px] py-[10px] px-[48px] bg-[#DB4444] text-[#fff] text-[16px] font-semibold">Buy Now</button>
//                             <button className="border-[#808080] border-[1px] rounded-[4px] w-[40px] h-[40px] flex items-center justify-center"><LikeIcon /></button>
//                         </div>
//                         <div className="border-[#808080] border-[1px] rounded-[4px]">
//                             <div className="pt-[24px] pl-[16px] pb-[16px] border-b-[#808080] border-b-[1px] flex items-center gap-[16px]">
//                                 <DeliveryIcon />
//                                 <div>
//                                     <p className="font-medium text-[16px] mb-[8px]">Free Delivery</p>
//                                     <p className="font-medium text-[12px]">Enter your postal code for Delivery Availability</p>
//                                 </div>
//                             </div>
//                             <div className="pt-[24px] pl-[16px] pb-[16px] flex items-center gap-[16px]">
//                                 <ReturnIcon />
//                                 <div>
//                                     <p className="font-medium text-[16px] mb-[8px]">Return Delivery</p>
//                                     <p className="font-medium text-[12px]">Free 30 Days Delivery Returns. Details</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//         </div>
//     );
// };
