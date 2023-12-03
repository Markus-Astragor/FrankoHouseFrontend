import React, { useState } from "react";
import { StyledPagination } from "./styled";
import Stack from "@mui/material/Stack";
import {
  NewsBlock,
  NewsContainer,
  TitleProjects,
  Pages,
} from "../../components/styles/NewsBoardStyle";
import NewsPiece from "./NewsPiece";
import { data } from "./mocks";

// import constants
// import Constants from "./constants";

// const { newsPerPage, page, handleChange, currentNewsForCurrentPage } = Constants();

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
              shortText={piecenews.shortText}
              timeStamp={piecenews.timeStamp}
              key={index}
            />
          );
        })}
      </NewsContainer>

      <Pages>
        <Stack spacing={1}>
          <StyledPagination
            count={totalCount}
            page={page}
            onChange={handleChange}
            variant='outlined'
            shape='rounded'
          />
        </Stack>
      </Pages>
    </NewsBlock>
  );
}
export default NewsBoard;
