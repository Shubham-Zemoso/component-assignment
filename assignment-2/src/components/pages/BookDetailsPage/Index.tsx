import React from 'react'
import BookDetails from '../../organisms/BookDetails'
import BookGrid from '../../organisms/BookGrid'
import Footer from '../../organisms/Footer/Index'
import Header from '../../organisms/Header'



const BookDetailsPage = () => {
  return (
    <div>
        <Header />
        <BookDetails imgSrc=''/>
        <BookGrid books={[]}/>
        <Footer />
    </div>
  )
}

export default BookDetailsPage