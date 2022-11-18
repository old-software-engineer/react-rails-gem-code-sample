import React from "react";
import { Routes, Route } from "react-router-dom";
import Airlines from "./Airlines/Airlines";
import Airline from "./Airlines/[id]";
import Navbar from "./SharedComponent/Navbar";

const App = () => {
  return (
    <>
      {/* Navbar component Imported */}
      <Navbar />
      {/* Routes create for Index page and Show Page */}
      <Routes>
        <Route exact path="/" element={<Airlines />}></Route>
        <Route exact path="/airlines/:slug" element={<Airline />}>
          {" "}
        </Route>
      </Routes>
    </>
  );
};

export default App;
