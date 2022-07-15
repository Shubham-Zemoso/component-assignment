import React from 'react'

interface Props {
    img:string
}

const BookDetailThumbnail = ({img}: Props) => {
  return (
    <div>
        <img src={img} alt=""/>
    </div>
  )
}

export default BookDetailThumbnail