import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#A61473] to-[#05F2F2] min-h-screen max-w-screen-lg mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
