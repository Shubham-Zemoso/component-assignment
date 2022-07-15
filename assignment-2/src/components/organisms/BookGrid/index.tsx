import { Grid } from '@mui/material';
import React from 'react'
import BookGridItem from '../../molecules/BookGridItem';

interface BookData {
  id: string;
  img: string;
  title: string;
  author: string;
  reads: string;
}

interface Props {
  books: BookData[];
}

const BookGrid = ({books}:Props) => {
  return (
    <div>
        <Grid container>
            {
                books.map(book => {
                    return <Grid item><BookGridItem bookData={book}/></Grid>
                })
            }
        </Grid>
    </div>
  )
}

export default BookGrid