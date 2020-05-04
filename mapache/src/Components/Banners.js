import React from 'react'
import styled from 'styled-components'

import promotion from '../Images/promotion1.jpg'

import Paper from '@material-ui/core/Paper';

const BannerWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const PaperStyled = styled(Paper)`
    width: 80%;
    height: 350px;
    margin: 50px 0px;
`;
const BannerImage = styled.img`
    width: 100%;
    height: 100%;
`;

const Banners = () => {
    return (
        <BannerWrapper>
            <PaperStyled elevation={3}>
                <BannerImage src={promotion} alt="promoção"/>
            </PaperStyled>
        </BannerWrapper>
    )
}

export default Banners
