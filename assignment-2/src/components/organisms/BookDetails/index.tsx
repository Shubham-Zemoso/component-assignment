import { Grid, Typography } from "@mui/material";
import React from "react";
import BookDetailThumbnail from "../../atoms/BookDetailThumbnail";
import BookDetailsTabs from "../../molecules/BookDetailTabs";

interface BookData {
  id: string;
  img: string;
  title: string;
  author: string;
  reads: string;
}

interface Props {
  book: BookData;
}

const BookDetails = ({book}: Props) => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Typography>{book.title}</Typography>
          <Typography>Book tagline</Typography>
          <Typography>Author</Typography>
          {/* TypoWithIcon */}
          {/* Buttons in the grid */}
          <BookDetailsTabs />
        </Grid>
        <Grid item>
          <BookDetailThumbnail img={book.img}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookDetails;
