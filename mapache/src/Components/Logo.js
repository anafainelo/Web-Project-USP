import React from 'react'
import  logotatu from '../Images/logotatu.png'
import styled from 'styled-components'

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const LogoImage = styled.img`
    width: 70px;
    height: 70px;
`;

const Title = styled.h1`
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 30px;
    color: white;
    margin: 0px 10px;
`;

const Logo = () => (
    <LogoWrapper>
        <LogoImage src={logotatu} alt="logomarca"/>
        <Title>mapache</Title>
    </LogoWrapper>
)

export default Logo
