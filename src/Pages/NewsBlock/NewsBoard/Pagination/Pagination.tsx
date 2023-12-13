import React from "react";
import { StyledPagination } from "./styled";
import Stack from "@mui/material/Stack";
import { Pages } from "../NewsBoardStyle";

type PaginationProps = {
  totalCount: number;
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

function Pagination({ totalCount, page, handleChange }: PaginationProps) {
  return (
    <div>
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
    </div>
  );
}

export default Pagination;
