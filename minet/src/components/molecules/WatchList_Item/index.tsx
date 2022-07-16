import { Card, CardContent, CardMedia, Grid } from '@mui/material'
import React from 'react'
import ButtonAtom from '../../atoms/ButtonAtom';

const WatchListItem = () => {
  return (
    <div>
      <Card>
        <CardMedia>
          <img src="" alt="" />
        </CardMedia>
        <CardContent>
          <Grid>{/* Crypt name */}</Grid>
          <Grid>
            {/* text Content 1 */}
            {/* text Content 2 */}
            {/* text Content 3 */}
          </Grid>
          <ButtonAtom>Add To Watchlist</ButtonAtom>
        </CardContent>
      </Card>
    </div>
  );
}

export default WatchListItem