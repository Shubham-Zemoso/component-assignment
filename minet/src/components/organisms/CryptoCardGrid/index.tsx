import { Grid } from '@mui/material'
import React from 'react'
import CryptoCard from '../../molecules/CryptoCard';

interface CryptoData {
  id: "string";
  name: "string";
  imgSrc: "string";
  value: "string";
}
interface Props {
  cryptos: CryptoData[];
}

const CryptoCardGrid = (props: Props) => {
  return (
    <div>
      <Grid container>
        {
          props.cryptos.map(crypto => {
            return <Grid item>
              <CryptoCard cryptoData={crypto} />
            </Grid>
          })
        }
      </Grid>
    </div>
  )
}

export default CryptoCardGrid