// import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <div className="h-[100vh] w-full bg-green-300">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
