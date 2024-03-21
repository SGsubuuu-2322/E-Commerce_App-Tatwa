import Login_Form from "../Components/Login_Form";
import Register_Form from "../Components/Register_Form";

export const PublicRoutes = [
  {
    path: "/login",
    element: Login_Form,
  },
  {
    path: "/register",
    element: Register_Form,
  },
];
