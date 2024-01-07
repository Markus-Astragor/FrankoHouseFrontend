import React from "react";
import { StyledPagination } from "./styled";
import Stack from "@mui/material/Stack";
import { BlockPagination, Pages } from "./styledPagination";

type PaginationProps = {
  totalCount: number;
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

function Pagination({ totalCount, page, handleChange }: PaginationProps) {
  return (
    <BlockPagination>
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
    </BlockPagination>
  );
}

export default Pagination;
