// import React from 'react'

import AsideSection from "./AsideSection";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex bg-white">
      {/* sidebar area */}
      <Sidebar />

      <AsideSection />
    </div>
  );
};

export default Home;
