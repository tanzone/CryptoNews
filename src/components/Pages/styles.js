import styled from "styled-components";
import { Typography, Statistic, Card } from 'antd';

import { v } from "../../styles/variables";

const { Text } = Typography;


export const STitleLarge = styled(Text)`
    font-size: xxx-large;
    color: ${({ theme }) => theme.text};
    text-shadow: 1px 2px rgb(52, 131, 235);
`;

export const STitleMedium = styled(Text)`
    font-size: xx-large;
    color: ${({ theme }) => theme.text};
`;

export const STitleSmall = styled(Text)`
    font-size: large;
    color: ${({ theme }) => theme.text};
    margin-left:10px;
`;

export const STitleXSmall = styled(Text)`
    font-size: small;
    color: ${({ theme }) => theme.text};
    margin-left:10px;
`;

export const SCard = styled(Card)` 
    background: ${({ theme }) => theme.bgCard};
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    margin:10px;
`;

export const SCardCripto = styled(Card)` 
    border-color:  ${({ theme }) => theme.borderCardCripto};
    background: ${({ theme }) => theme.bgCardCripto};
`;

export const SCardNews = styled(Card)` 
    border-color:  ${({ theme }) => theme.borderCardNews};
    background: ${({ theme }) => theme.bgCardNews};
`;


export const SStatistic = styled(Statistic)` 
    padding: 10px;
    margin-left:10px;
`;