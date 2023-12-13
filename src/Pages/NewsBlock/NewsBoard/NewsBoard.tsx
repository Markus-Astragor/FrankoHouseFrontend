import React, { useState } from "react";
import { NewsBlock, NewsContainer, TitleProjects } from "./NewsBoardStyle";
import NewsPiece from "../NewsPiece/NewsPiece";
import { data } from "./mocks";
import Pagination from "./Pagination/Pagination";

function NewsBoard() {
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
  const totalCount =
    data.length % newsPerPage !== 0
      ? Math.round(data.length / newsPerPage) + 1
      : data.length / newsPerPage;
  return (
    <NewsBlock>
      <TitleProjects>Проекти</TitleProjects>
      <NewsContainer>
        {currentNewsForCurrentPage.map((piecenews, index) => {
          return (
            <NewsPiece
              image={piecenews.image}
              title={piecenews.title}
              description={piecenews.description}
              date={piecenews.date}
              key={index}
            />
          );
        })}
      </NewsContainer>

      <Pagination totalCount={totalCount} page={page} handleChange={handleChange} />
    </NewsBlock>
  );
}
export default NewsBoard;
