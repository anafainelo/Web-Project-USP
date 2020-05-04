import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Header from  '../Components/Header'
import Banners from '../Components/Banners'
import GeneralProductsView from '../Components/GeneralProductsView'


const Wrapper = styled(Container)`
    background: #f5f5f5;
    height: 100vh;
`;

const MainPage = () => (
    <Wrapper maxWidth="xl">
        <Header />
        <Banners />
        <GeneralProductsView />
    </Wrapper>
)

export default MainPage
