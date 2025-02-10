import Banner from "../../assets/images/banner.png";
import { Card } from "../../components/card";
import { useGetProducts } from "../../service/query/useGetProducts";
import type { ProductType } from "../../service/type";

export const Home = () => {
  const { data, isLoading } = useGetProducts();
  if (isLoading) {
    return (
      <section className="container max-w-[1170px] mx-auto text-center py-10">
        <p className="text-lg font-semibold">Loading...</p>
      </section>
    );
  }

  return (
    <section className="container max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pt-[40px]">
        <img
          src={Banner || "/placeholder.svg"}
          alt="image"
          className="w-full h-auto"
        />
      </div>
      <div className="py-[68px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {data?.products?.slice(-8).map((item: ProductType) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
