import styled from "styled-components";

export const Videocontent = styled.div`
    width: 20vw;
    height: 30vh;
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
    border-radius: 10px;
    border-width: thin;
    align-items: start;
    justify-items: stretch;    
`

export const Videoimagem = styled.img`
    border-radius: 10px 10px 0px 0px;
    width: 20vw;
    height: 20vh;
`