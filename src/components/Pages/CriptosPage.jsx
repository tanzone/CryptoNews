import React, { useState, useEffect } from 'react';
import millify from "millify";
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from '../../services/cryptoApi';

import Loader from "./Loader";

const CriptosPage = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFeatching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    setCryptos(filteredData);
  }, [cryptosList, searchTerm])

  /*
  console.log(count);
  console.log(cryptos);
  */
 
  if(isFeatching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
        <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
      )}
      
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) =>(
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card 
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} alt={currency.id} />}
                hoverable
                >
                  <p><b>Price:</b> {millify(currency.price)}</p>
                  <p><b>Market Cap:</b> {millify(currency.marketCap)}</p>
                  <p><b>Daily Change:</b> {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default CriptosPage