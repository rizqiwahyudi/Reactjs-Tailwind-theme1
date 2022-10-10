import { useEffect } from "react";
import React from "react";
import Navbar from "./components/admin/Navbar";

function App() {

  useEffect(() => {
    console.log("hello world");
  }, []);

  return (
    <>
      <Navbar/>
    </>
  );
}

export default App;
