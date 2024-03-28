import Home from "../Components/Home";
import ProductComponent from "../Components/ProductComponent";

export const AuthRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/details/:id",
    element: ProductComponent,
  },
];
