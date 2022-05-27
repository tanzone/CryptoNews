import React, { useContext } from 'react';
import millify from "millify";
import { Typography, Row, Col, Statistic, Card } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../../services/cryptoApi';

import { CriptosPage, NewsPage } from "../../components";
import Loader from "./Loader";

import './styles.css';
import { STitleLarge, SStatsLarge, SStatsSmall } from "./styles";

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
      <STitleLarge level={2}>Global Crypto Stats</STitleLarge>
      <Row>
        <Col span={8}>
          <Card title={<SStatsLarge>Total Cryptocurrencies</SStatsLarge>} bordered={true}>
            <SStatsSmall>{millify(globalStats.total)}</SStatsSmall>
          </Card>
        </Col>
        <Col span={8}>
        <Card title={<SStatsLarge>Total Exchanges</SStatsLarge>} bordered={true}>
          <SStatsSmall>{millify(globalStats.totalExchanges)}</SStatsSmall>
          </Card>
        </Col>
        <Col span={8}>
           <Card title={<SStatsLarge>Total Market Cap</SStatsLarge>} bordered={true}>
          <SStatsSmall>{millify(globalStats.totalMarketCap)}</SStatsSmall>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
        <Card title={<SStatsLarge>Total 24h Volume</SStatsLarge>} bordered={true}>
          <SStatsSmall>{millify(globalStats.total24hVolume)}</SStatsSmall>
          </Card>
        </Col>
        <Col span={8}>
           <Card title={<SStatsLarge>Total Markets</SStatsLarge>} bordered={true}>
          <SStatsSmall>{millify(globalStats.totalMarkets)}</SStatsSmall>
          </Card>
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more"><Link to="/cryptosPage">Show More</Link></Title>
      </div>
      <CriptosPage simplified />
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/cryptoNews">Show More</Link></Title>
      </div>
      <NewsPage simplified />

    </>
  )
}

export default HomePage