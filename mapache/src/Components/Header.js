import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import SearchInput from './SearchInput'
import HeaderAccountControl from './HeaderAccountControl'
import NavigationMenu from './NavigationMenu'
import Shortcuts from './Shortcuts'

const Wrapper = styled.div`
    background: #03a6a1;
    padding: 20px 20px;
    border-radius: 10px;
`; 

const LogoAndSearch = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 80%;
`;

const SuperiorSection = styled.div`
    display: flex;
    direction: row;
    margin-bottom: 20px;
`;

const InferiorSection = styled.div`
    display: flex;
    direction: row;
    align-items: center;
`;

const Header = () => (
    <Wrapper>

        <SuperiorSection>
            <LogoAndSearch>
                <Logo />
                <SearchInput />
            </LogoAndSearch>
            <HeaderAccountControl/>
        </SuperiorSection>

        <InferiorSection>
            <NavigationMenu />
            <Shortcuts />
        </InferiorSection>


    </Wrapper>
)

export default Header
