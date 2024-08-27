import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "./api/apiSlice";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Category = () => {
  const { data, isError, isLoading } = useGetCategoriesQuery();
  const navigate = useNavigate();
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Error in loading the category</p>;
  } else if (!data.length) {
    content = <p>No Category to show</p>;
  } else {
    content = (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {data.map((category) => (
            <CarouselItem key={category.id} className="md:basis-1/5">
              <div className="flex flex-col items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img
                    className=" w-24 h-24 lg:w-48 lg:h-48 rounded-full hover:cursor-pointer"
                    src={category.imageUrl}
                    alt={category.name}
                    onClick={() => navigate(`recipe/${category.id}`)}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-medium text-gray-900 text-wrap dark:text-white">
                    {category.name}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }
  return (
    <div className="md:max-w-5xl mx-auto mt-2 px-10 flex justify-center">
      {content}
    </div>
  );
};

export default Category;
