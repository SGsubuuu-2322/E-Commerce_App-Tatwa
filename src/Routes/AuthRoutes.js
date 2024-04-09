import Account from "../Components/Account";
import Cart from "../Components/Cart";
import EditProfile from "../Components/EditProfile";
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
  {
    path: "/account",
    element: Account,
  },
  {
    path: "/edit-profile",
    element: EditProfile,
  },
  {
    path: "/cart/:id",
    element: Cart,
  },
];
