import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
    display: flex;
    width: 100%;
    align-items: stretch;
`;

export const SMain = styled.div`
    padding: calc(${v.smSpacing} * 2);    

    h1 {
        font-size: 14px;
    }
`;
