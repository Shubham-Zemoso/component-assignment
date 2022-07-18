import { Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'

interface CryptoData {
  id: string;
  name: string;
  imgSrc: string;
  value: string;
}
interface Props {
    cryptoData: CryptoData
}
const CryptoCard = ({cryptoData}: Props) => {
  return (
    <div>
        <Card>
            <CardMedia>
                <img src={cryptoData.imgSrc}/>
            </CardMedia>
            <CardContent>
                {cryptoData.name}
                {cryptoData.value}
            </CardContent>
        </Card>
    </div>
  )
}

export default CryptoCard