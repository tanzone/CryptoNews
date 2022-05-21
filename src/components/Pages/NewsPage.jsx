import React, { useState }from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from "moment";

import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";

import Loader from "./Loader";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.nftitalia.com%2Fwp-content%2Fuploads%2F2017%2F07%2Fnews-1.jpg&imgrefurl=http%3A%2F%2Fwww.nftitalia.com%2Fnews%2F&tbnid=juFIfEAQ9hxxkM&vet=12ahUKEwjs96z0-e33AhVE0RoKHQl7B88QMygAegUIARDiAQ..i&docid=Icg2G4t7WrLHGM&w=5145&h=3000&q=news%20image&ved=2ahUKEwjs96z0-e33AhVE0RoKHQl7B88QMygAegUIARDiAQ";

const NewsPage = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency")
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6: 25})
  const { data } = useGetCryptosQuery(100);

  if(!cryptoNews?.value) return <Loader />;

  //console.log(cryptoNews);
  
  return (
   <Row gutter={[ 24, 24]}>
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
         <Card hoverable className='news-card'>
          <a href={news.url} target="_blank" rel="noreferrer">
            <div className='news-image-container'>
              <Title className='news-title' level={4}>{news.name}</Title>
              <img style={{ maxWidth: "200px", maxHeight: "100px"}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
            </div>
            <p>
              {news.description > 100 
              ? `${news.description.substring(0, 100)}...` 
              : news.description}
            </p>
            <div className='provider-container'>
              <div>
                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                <Text className='provider-name'>{news.provider[0]?.name}</Text>
              </div>
              <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
            </div>
          </a>
         </Card>
       </Col>
     ))}
   </Row> 
  )
}

export default NewsPage