import React from 'react'
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import TradeList from '../../organisms/TradeList';

const TradePage = () => {
  return (
    <div>
      <Header />
        <TradeList tradeList={[]} />
      <Footer />
    </div>
  );
}

export default TradePage