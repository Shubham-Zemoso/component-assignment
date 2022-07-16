import { Grid } from '@mui/material'
import React from 'react'
import WatchListItem from '../../molecules/WatchList_Item'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'

const DetailsPage = () => {
  return (
    <div>
      <Header />
      <WatchListItem />
      {/* tabs */}
      <Grid container>
        <Grid item>
          {/* Text Content */}
          {/* Some Links */}
        </Grid>
        <Grid item>
          {/* Price List */}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default DetailsPage