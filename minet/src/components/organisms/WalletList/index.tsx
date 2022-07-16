import { Grid } from '@mui/material';
import React from 'react'
import WalletListItem from '../../molecules/WalletListItem';

interface Props {
  walletList: any[];
}

const WalletList = (props: Props) => {
  return (
    <div>
      <Grid container>
        {props.walletList.map((item) => {
          return (
            <Grid item>
              <WalletListItem />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default WalletList


