import { Grid } from '@mui/material';
import React from 'react'
import BookListItem from '../../molecules/BookListItem';

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

const BookList = ({books}: Props) => {
   return (
     <div>
       <Grid container>
         {books.map((book) => {
           return (
             <Grid item>
               <BookListItem bookData={book} />
             </Grid>
           );
         })}
       </Grid>
     </div>
   );
}

export default BookList