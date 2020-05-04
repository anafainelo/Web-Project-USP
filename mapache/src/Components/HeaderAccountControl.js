import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Profile = styled(AccountCircleIcon)`
    color: yellow;
    margin: 0px 10px;
`;

const Likes = styled(FavoriteOutlinedIcon)`
    color:yellow;
    margin: 0px 10px;
`;

const Shopping = styled(ShoppingCartOutlinedIcon)`
    color: yellow;
    margin: 0px 10px;

`;

const AccountControl = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 20%;
`;


const HeaderAccountControl = () => (
    <AccountControl>
        <Profile fontSize="large" />
        <Likes fontSize="large" />
        <Shopping fontSize="large" />
    </AccountControl>
)

export default HeaderAccountControl
