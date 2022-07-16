import { Grid, Icon } from '@mui/material';
import React from 'react'
import ButtonAtom from '../../atoms/ButtonAtom';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';

interface Props {
    sell? : boolean
}

const PaymentPage = (props:Props) => {
  return (
    <div>
      <Header />
      <Icon />
      {/* Quantity */}
      {/* Text Content */}
      <Grid>
        <ButtonAtom>{props.sell? "BUY CRYPTO" : "SELL CRYPTO"}</ButtonAtom>
        <ButtonAtom>GO TO USD COIN</ButtonAtom>
      </Grid>
      <Footer />
    </div>
  );
}

export default PaymentPage