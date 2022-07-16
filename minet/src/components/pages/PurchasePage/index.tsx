import { Grid } from '@mui/material';
import React from 'react'
import DeliveryDropDown from '../../molecules/DeliveryDropDown';
import WatchListItem from '../../molecules/WatchList_Item';
import CryptoCardGrid from '../../organisms/CryptoCardGrid';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import OrderSummary from '../../organisms/OrderSummary';

interface Props {
    sell: boolean
}

const Purchase = (props:Props) => {
  return (
    <div>
      <Header />
      <Grid container>
        <Grid item>

        </Grid>
        <CryptoCardGrid cryptos={[]}/>
        <WatchListItem />
        {/* Amount Details */}
        <DeliveryDropDown />
      </Grid>
      <Grid item>
        <OrderSummary sell={props.sell} />
      </Grid>
      <Footer />
    </div>
  );
}

export default Purchase