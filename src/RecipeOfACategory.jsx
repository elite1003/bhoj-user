import { useParams } from "react-router-dom";
import { Recipe } from "./Recipe";
import { useGetRecipesWithGivenCategoryQuery } from "./api/apiSlice";
const RecipeOfACategory = () => {
  const { catId } = useParams();
  const {
    data: recipes,
    isLoading,
    isSuccess,
    isError,
  } = useGetRecipesWithGivenCategoryQuery(catId);
  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <div>Something went wrong</div>;
  }
  return recipes?.length === 0 ? (
    <div className="w-full md:max-w-5xl mx-auto mb-2 p-5">
      <p className="text-xl font-medium">
        No recipe available in this category.
      </p>
      <p>
        Currently there is no recipe available in this category. sorry for
        inconvenience...
      </p>
    </div>
  ) : (
    <div className="w-full md:max-w-5xl mx-auto mb-2 p-5 ">
      <p className="text-xl font-semibold p-4">{recipes[0].catName}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {recipes?.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeOfACategory;
