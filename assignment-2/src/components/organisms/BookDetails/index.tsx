import { Grid, Typography } from "@mui/material";
import React from "react";
import BookDetailThumbnail from "../../atoms/BookDetailThumbnail";
import BookDetailsTabs from "../../molecules/BookDetailTabs";

interface Props{
    imgSrc: string
}

const BookDetails = ({imgSrc}: Props) => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Typography>Book name</Typography>
          <Typography>Book tagline</Typography>
          <Typography>Author</Typography>
          {/* TypoWithIcon */}
          {/* Buttons in the grid */}
          <BookDetailsTabs />
        </Grid>
        <Grid item>
          <BookDetailThumbnail img={imgSrc}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookDetails;
