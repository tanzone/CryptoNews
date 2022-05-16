import styled from "styled-components";


export const SFooter = styled.div`
    width: auto;
    background: ${({ theme }) => theme.bg};
    height: 10vh;
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    position: bottom;
`;