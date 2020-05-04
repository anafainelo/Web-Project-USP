import React from 'react'
import styled from 'styled-components'


const StyledButtons = styled.div`
   margin-left: 10%;
`;

const Link = styled.a`
    font-size: 25px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    padding: 0px 15px;

`;

const Shortcuts = () => {
    return(
        <StyledButtons>
            <Link href="">ofertas do dia</Link>
            <Link href="">promoções</Link>
            <Link href="">celulares</Link>
            <Link href="">computadores</Link>
            <Link href="">acessórios</Link>
        </StyledButtons>
    )
}

export default Shortcuts
