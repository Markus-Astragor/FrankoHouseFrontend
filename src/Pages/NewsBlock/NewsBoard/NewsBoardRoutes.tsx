import React from "react";
import { Route, Routes } from "react-router";
import NewsBoard from "./NewsBoard";
import FullNewsPiece from "../FullNewsPiece/FullNewsPiece";

function NewsBoardRoutes() {
  return (
    <div>
      <Routes>
        <Route index element={<NewsBoard />} />
        <Route path=':id' element={<FullNewsPiece />} />
      </Routes>
    </div>
  );
}

export default NewsBoardRoutes;
