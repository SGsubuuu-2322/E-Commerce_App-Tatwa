import Account from "../Components/Account";
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
];
