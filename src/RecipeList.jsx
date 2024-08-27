import { useGetRecipesQuery } from "./api/apiSlice";
import { Recipe } from "./Recipe";
const RecipeList = () => {
  const { data: recipes, isLoading, isError } = useGetRecipesQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <div>Something went wrong</div>;
  }
  return recipes?.length === 0 ? (
    <div className="w-full md:max-w-5xl mx-auto mb-2 p-5">
      <p className="text-xl font-medium">No recipe available.</p>
      <p>Currently there is no recipe to order. sorry for inconvenience...</p>
    </div>
  ) : (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {recipes?.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
