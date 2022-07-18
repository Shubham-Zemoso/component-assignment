import React from 'react'
import Banner from '../../atoms/Banner'
import SearchBar from '../../molecules/SearchBar'
import Footer from '../../organisms/Footer/Index'
import Header from '../../organisms/Header'

const BookLandingPage = () => {
  return (
    <div>
        <Header />
        <Banner />
        <SearchBar />
        <Footer />

    </div>
  )
}

export default BookLandingPage