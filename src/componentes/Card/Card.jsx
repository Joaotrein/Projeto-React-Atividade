import styled from 'styled-components'

export const BoxContent = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border: #E30206 solid;
    border-width: thin; 
    border-radius: 10px;
    align-items: start;
    justify-items: stretch;

img {
    width: 100%;
    height: 200px;
    border-radius: 10px;
}

h4 {
    margin: auto;
}
`