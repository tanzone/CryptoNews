import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
    display: flex;
`;

export const SMain = styled.main`
    margin-left: calc(${v.sidebarWidth});
    margin-right: calc(${v.xxlSpacing});
    padding: calc(${v.smSpacing} * 2);

    h1 {
        font-size: 14px;
    }
`;