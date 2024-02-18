import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Create from "./Create";
import Update from "./Update";
function Approuter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Approuter;
