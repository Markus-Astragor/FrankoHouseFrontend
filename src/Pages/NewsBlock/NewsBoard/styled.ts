import { Pagination, styled } from "@mui/material";

export const StyledPagination = styled(Pagination)({
  "& li": {
    marginRight: "10px",
    backgroundColor: "black",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "grey",
    },
    transition: "0.3s",
  },

  "& button": {
    color: "white",
    borderWidth: "0px",
  },
});
