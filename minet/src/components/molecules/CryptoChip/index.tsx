import React from 'react'
import { Chip, ChipProps } from "@mui/material";

interface Props extends ChipProps {

}

const CryptoChip = (props: Props) => {
  return (
    <div>
        <Chip>{props.children}</Chip>
    </div>
  )
}

export default CryptoChip