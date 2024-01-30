import React, { useState, useEffect } from "react";
import axios from "axios";
import { BlockForLoader, NewsBlock, NewsContainer, TitleProjects } from "./NewsBoardStyle";
import NewsPiece from "../NewsPiece/NewsPiece";
import Pagination from "./Pagination/Pagination";
import URLS from "../../../configURLS.json";
import LoaderComponent from "../../../components/Loader/LoaderComponent";

function NewsBoard() {
  type NewsData = {
    _id: string;
    title: string;
    shortDescription: string;
    photos: string;
    timestamp: string;
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newsPerPage] = useState<number>(6);
  const [page, setPage] = useState<number>(1);
  const [dataFromBackend, setDataFromBackend] = useState<NewsData[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    axios
      .get(`${URLS["BASE-URL"]}/getPosts`)
      .then((res) => {
        console.log(res);
        setDataFromBackend(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setLoader(false);
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
      ? Math.floor(dataFromBackend.length / newsPerPage) + 1
      : dataFromBackend.length / newsPerPage;
  return (
    <>
      <NewsBlock>
        <TitleProjects>Події</TitleProjects>
        {loader ? (
          <BlockForLoader>
            <LoaderComponent />
          </BlockForLoader>
        ) : (
          <>
            <NewsContainer>
              {currentNewsForCurrentPage.map((piecenews, index) => {
                return (
                  <NewsPiece
                    image={piecenews.photos}
                    title={piecenews.title}
                    description={piecenews.shortDescription}
                    date={piecenews.timestamp}
                    key={index}
                    id={piecenews._id}
                  />
                );
              })}
            </NewsContainer>

            <Pagination totalCount={totalCount} page={page} handleChange={handleChange} />
          </>
        )}
      </NewsBlock>
    </>
  );
}
export default NewsBoard;
