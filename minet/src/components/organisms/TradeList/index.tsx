import { Grid } from '@mui/material'
import React from 'react'
import TradeListItem from '../../molecules/TradeListItem'

interface Props {
    tradeList : any[]
}

const TradeList = (props: Props) => {
  return (
    <div>
        <Grid container>
            {props.tradeList.map(trade => {
                return <Grid item><TradeListItem /></Grid>
            })}
        </Grid>
    </div>
  )
}

export default TradeList