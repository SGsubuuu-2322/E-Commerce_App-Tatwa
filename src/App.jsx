// import React from 'react'

// import { Link } from "react-router-dom";
// import Login_Form from "./Components/Login_Form";
import PublicNav from "./Components/PublicNav";
import Register_Form from "./Components/Register_Form";

const App = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <PublicNav />
      <Register_Form />
      {/* <Login_Form /> */}
    </div>
  );
};

export default App;
