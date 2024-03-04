import React from "react";
import { Route, Routes } from "react-router";
import NewsBoard from "./NewsBoard";

function NewsBoardRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NewsBoard />} />
      </Routes>
    </div>
  );
}

export default NewsBoardRoutes;
