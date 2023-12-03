// constants.ts
import React, { useState } from "react";
import { data } from "./mocks";

const Constants = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newsPerPage] = useState<number>(6);
  const [page, setPage] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setCurrentPage(value);
  };

  const indexOfLastNewsPiece: number = currentPage * newsPerPage;
  const indexOfFirstNewsPiece = indexOfLastNewsPiece - newsPerPage;

  const currentNewsForCurrentPage = data.slice(indexOfFirstNewsPiece, indexOfLastNewsPiece);

  return {
    currentPage,
    newsPerPage,
    page,
    handleChange,
    indexOfLastNewsPiece,
    indexOfFirstNewsPiece,
    currentNewsForCurrentPage,
  };
};

export default Constants;
