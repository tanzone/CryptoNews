import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import moment from 'moment';

import { STitleSmall } from "./styles";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = coinHistory?.data?.history?.length-1; i >0 ; i -= 1) 
  {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = coinHistory?.data?.history?.length - 1; i >= 0;  i -= 1) 
  {
    coinTimestamp.push(moment(coinHistory?.data?.history[i].timestamp * 1000).format("DD-MMM-YYYY"));
  }

  //console.log("history coinTimestamp:");
  //console.log(coinTimestamp);

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <STitleSmall level={5} className="price-change">Change: {coinHistory?.data?.change}%</STitleSmall>
          <STitleSmall level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</STitleSmall>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;