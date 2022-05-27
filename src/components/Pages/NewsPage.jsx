import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from "moment";

import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";

import Loader from "./Loader";
import uniprLogo from "../../images/fail.jfif";

import { SCardNews, STitleSmall, STitleXSmall, STitleMedium } from "./styles";

const { Text, Title } = Typography;
const { Option } = Select;

const NewsPage = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency")
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 25 })
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return <Loader />;

  //console.log(cryptoNews);

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className='select-news'
              placeholder="Select a Crypto"
              optionFilterProp='children'
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
            </Select>
          </Col>
      )}

      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <SCardNews hoverable className='news-card'>
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className='news-image-container'>
                <STitleSmall className='news-title' level={4}><b>{news.name}</b></STitleSmall>
                <img style={{ maxWidth: "200px", maxHeight: "100px" }} src={news?.image?.thumbnail?.contentUrl || uniprLogo} alt="news" />
              </div>
              <hr className='hrSpace'></hr>
              <STitleXSmall>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </STitleXSmall>
              <hr className='hrSpace'></hr>
              <div className='provider-container'>
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || uniprLogo} alt="news" />
                  <STitleXSmall className='provider-name'>{news.provider[0]?.name}</STitleXSmall>
                </div>
                <STitleXSmall>{moment(news.datePublished).startOf("ss").fromNow()}</STitleXSmall>
              </div>
            </a>
          </SCardNews>
        </Col>
      ))}
    </Row>
  )
}

export default NewsPage