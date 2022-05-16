import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
    display: block;
`;

export const SMain = styled.div`
    width: calc(100% - ${v.sidebarWidth});
    padding: calc(${v.smSpacing} * 2);
    margin-left: ${({ isOpen }) => (isOpen ? v.sidebarWidth : v.sidebarWidthClose)};

    h1 {
        font-size: 14px;
    }
`;
