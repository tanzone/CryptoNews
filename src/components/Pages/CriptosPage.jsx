import React, { useState } from 'react';
import millify from "millify";
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from '../../services/cryptoApi';

const CriptosPage = () => {
  const { data: cryptosList, isFeatching } = useGetCryptosQuery();

  return (
    <div>CriptosPage</div>
  )
}

export default CriptosPage