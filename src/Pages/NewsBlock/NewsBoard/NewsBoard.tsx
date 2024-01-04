import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewsBlock, NewsContainer, TitleProjects } from "./NewsBoardStyle";
import NewsPiece from "../NewsPiece/NewsPiece";
import Pagination from "./Pagination/Pagination";
import URLS from "../../../configURLS.json";

function NewsBoard() {
  type NewsData = {
    _id: string;
    Title: string;
    ShortDescription: string;
    Photos: string;
    Timestamp: string;
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newsPerPage] = useState<number>(6);
  const [page, setPage] = useState<number>(1);
  const [dataFromBackend, setDataFromBackend] = useState<NewsData[]>([]);

  useEffect(() => {
    axios
      .get(`${URLS["BASE-URL"]}/getPosts`)
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
  const currentNewsForCurrentPage = dataFromBackend.slice(
    indexOfFirstNewsPiece,
    indexOfLastNewsPiece,
  );
  const totalCount =
    dataFromBackend.length % newsPerPage !== 0
      ? Math.round(dataFromBackend.length / newsPerPage) + 1
      : dataFromBackend.length / newsPerPage;
  return (
    <NewsBlock>
      <TitleProjects>Проекти</TitleProjects>
      <NewsContainer>
        {currentNewsForCurrentPage.map((piecenews, index) => {
          return (
            <NewsPiece
              image={piecenews.Photos}
              title={piecenews.Title}
              description={piecenews.ShortDescription}
              date={piecenews.Timestamp}
              key={index}
              id={piecenews._id}
            />
          );
        })}
      </NewsContainer>

      <Pagination totalCount={totalCount} page={page} handleChange={handleChange} />
    </NewsBlock>
  );
}
export default NewsBoard;
