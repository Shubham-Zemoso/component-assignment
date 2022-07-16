import { Grid } from '@mui/material'
import React from 'react'
import Checkbox from '../../atoms/Checkbox'
import Icon from '../../atoms/Icon'

const PaymentCard = () => {
  return (
    <div>
        <Grid>
            <Checkbox />
            {/* text content */}
            <Icon />
        </Grid>
    </div>
  )
}

export default PaymentCard