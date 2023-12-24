import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewsBlock, NewsContainer, TitleProjects } from "./NewsBoardStyle";
import NewsPiece from "../NewsPiece/NewsPiece";
import { data } from "./mocks";
import Pagination from "./Pagination/Pagination";

function NewsBoard() {
  type NewsData = {
    _id: string;
    Title: string;
    ShortDescription: string;
    Photos: string[];
    Timestamp: string;
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newsPerPage] = useState<number>(6);
  const [page, setPage] = useState<number>(1);
  const [, setDataFromBackend] = useState<NewsData[]>();

  useEffect(() => {
    axios
      .get("https://www.server24.space/api/getPosts")
      .then((res) => {
        console.log(res);
        setDataFromBackend(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

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
              id={piecenews.id}
            />
          );
        })}
      </NewsContainer>

      <Pagination totalCount={totalCount} page={page} handleChange={handleChange} />
    </NewsBlock>
  );
}
export default NewsBoard;
