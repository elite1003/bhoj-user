import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import App from "./App";
import ProtectedRoute from "./ProtectedRoute";
import Cart from "./Cart";
import Order from "./Order";
import RecipeOfACategory from "./RecipeOfACategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      { path: "/order", element: <ProtectedRoute element={Order} /> },
      { path: "/cart", element: <ProtectedRoute element={Cart} /> },
      { path: "/recipe/:catId", element: <RecipeOfACategory /> },
    ],
  },
]);

export default router;
