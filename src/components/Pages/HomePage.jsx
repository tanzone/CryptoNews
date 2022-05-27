import React, {useContext} from 'react';
import millify from "millify";
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../../services/cryptoApi';

import { CriptosPage, NewsPage } from "../../components";
import Loader from "./Loader";

import './styles.css';
import { STitleLarge } from "./styles";

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
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Marcket Cap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more"><Link to="/cryptosPage">Show More</Link></Title>
      </div>
      <CriptosPage simplified/>
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/cryptoNews">Show More</Link></Title>
      </div>
      <NewsPage simplified/>

    </>
  )
}

export default HomePage