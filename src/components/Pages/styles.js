import styled from "styled-components";
import { Typography } from 'antd';

import { v } from "../../styles/variables";

const { Text } = Typography;


export const STitleLarge = styled(Text)`
    font-size: xxx-large;
    color: ${({ theme }) => theme.text};
`;

export const STitleMedium = styled(Text)`
    font-size: x-large;
    color: ${({ theme }) => theme.text};
`;

export const STitleSmall = styled(Text)`
    font-size: larger;
    color: ${({ theme }) => theme.text};
`;