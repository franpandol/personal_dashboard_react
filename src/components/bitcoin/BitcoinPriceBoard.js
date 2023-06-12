import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BitcoinPriceBoard.css';

const BitcoinPriceBoard = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
        );
        const bitcoinPrice = response.data.bitcoin.usd;
        setBitcoinPrice(bitcoinPrice);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bitcoin-price-bar">
      <span>Bitcoin Price: ${bitcoinPrice.toFixed(2)}</span>
    </div>
  );
};

export default BitcoinPriceBoard;
