import styled from "styled-components";
import { Typography } from 'antd';

import { v } from "../../styles/variables";

const { Text, Statistic } = Typography;


export const STitleLarge = styled(Text)`
    font-size: xxx-large;
    color: ${({ theme }) => theme.text};
`;

export const STitleMedium = styled(Text)`
    font-size: x-large;
    color: ${({ theme }) => theme.text};
`;

export const SStatsLarge = styled(Text)`
    font-size: larger;
    color: ${({ theme }) => theme.text};
`;

export const SStatsSmall = styled(Text)`
    font-size: small;
    color: ${({ theme }) => theme.text};
`;