import Category from "./Category";
import RecipeList from "./RecipeList";
const Home = () => {
  return (
    <div className="mx-auto md:max-w-5xl mt-10">
      <div className="px-5 mb-5">
        <p className="text-2xl font-semibold ">Category</p>
        <Category />
      </div>
      <div className="px-5 mb-5">
        <p className="text-2xl font-semibold">Recipe</p>
        <RecipeList />
      </div>
    </div>
  );
};
export default Home;
