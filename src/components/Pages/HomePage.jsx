import React, { useContext } from 'react';
import millify from "millify";
import { Typography, Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../../services/cryptoApi';

import { CriptosPage, NewsPage } from "../../components";
import Loader from "./Loader";

import './styles.css';
import { STitleLarge, STitleMedium, SStatistic, SCard } from "./styles";

import { ThemeContext } from "./../../App";

const { Title } = Typography;

const HomePage = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  //console.log(data);

  if (isFetching) return <Loader />;

  return (
    <>
      <STitleLarge level={2}>Unipr CryptoNews & Stats</STitleLarge>
      <Row>
        <Col span={12}>
          <SCard bordered={false} title="Total Currencies" headStyle={{ color: (theme === "light" ? "black" : "white") }}>
            <SStatistic valueStyle={{ color: (theme === "light" ? "black" : "white") }} value={millify(globalStats.total)} />
          </SCard>
        </Col>
        <Col span={12}>
          <SCard bordered={false} title="Total Exchanges" headStyle={{ color: (theme === "light" ? "black" : "white") }}>
            <SStatistic valueStyle={{ color: (theme === "light" ? "black" : "white") }} value={millify(globalStats.totalExchanges)} />
          </SCard>
        </Col>
        <Col span={12}>
          <SCard bordered={false} title="Total Market Cap" headStyle={{ color: (theme === "light" ? "black" : "white") }}>
            <SStatistic valueStyle={{ color: (theme === "light" ? "black" : "white") }}value={millify(globalStats.totalMarketCap)} />
          </SCard>
        </Col>
        <Col span={12}>
          <SCard bordered={false} title="Total 24h Volume" headStyle={{ color: (theme === "light" ? "black" : "white") }}>
            <SStatistic valueStyle={{ color: (theme === "light" ? "black" : "white") }} value={millify(globalStats.total24hVolume)} />
          </SCard>
        </Col>
        <Col span={24}>
          <SCard bordered={false} title="Total Markets" headStyle={{ color: (theme === "light" ? "black" : "white") }}>
            <SStatistic valueStyle={{ color: (theme === "light" ? "black" : "white") }} value={millify(globalStats.totalMarkets)} />
          </SCard>
        </Col>
      </Row>

      <div className='home-heading-container'>
        <STitleMedium level={2} className="home-title">Top 10 Cryptocurrencies in the world</STitleMedium>
        <Title level={3} className="show-more"><Link to="/cryptosPage">Show More</Link></Title>
      </div>
      <CriptosPage simplified />

      <div className='home-heading-container'>
        <STitleMedium level={2} className="home-title">Latest Crypto News</STitleMedium>
        <Title level={3} className="show-more"><Link to="/cryptoNews">Show More</Link></Title>
      </div>
      <NewsPage simplified />

    </>
  )
}

export default HomePage