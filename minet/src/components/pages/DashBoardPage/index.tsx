import { Grid } from '@mui/material'
import React from 'react'
import CryptoCard from '../../molecules/CryptoCard'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'
import TradeList from '../../organisms/TradeList'
import WalletList from '../../organisms/WalletList'

const DashBoardPage = () => {
  return (
    <div>
      <Header />
      <Grid container>
        <Grid item>
          <Grid>
            <CryptoCard cryptoData={}/>
            {/* Tabs */}
            {/* Illustration image */}
          </Grid>
          <Grid>
            <Grid>
              <TradeList tradeList={[]}/>
            </Grid>
            <Grid>
              <WalletList walletList={[]}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default DashBoardPage