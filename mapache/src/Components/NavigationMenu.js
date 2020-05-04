import React, {useState} from 'react'
import styled from 'styled-components'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { List } from '@material-ui/core';

import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import HeaderAccountControl from './HeaderAccountControl';


const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;    
`;

const StyledListItemText = styled(ListItemText)`
    color: black;
    width: 200px;
`;

const MenuIcon = styled(MenuOutlinedIcon)`
    color: white;
`;

const MenuLabel = styled.p`
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin: 0px 10px;
`;

const NavigationMenu = () => {
    
    const [anchor, setAnchor] = useState(false);
    
    return(
        <>
            <StyledDiv>
                <Button onClick={()=> setAnchor(true)} >
                    <MenuIcon fontSize="large" />
                </Button>
                <MenuLabel>categorias</MenuLabel>
            </StyledDiv>
    
            <Drawer anchor="left" open={anchor} onClose={() => setAnchor(false)}>
                <List>
                    <ListItem button key="key">
                        <ListItemIcon>
                            <ComputerOutlinedIcon/>
                        </ListItemIcon>
                        <StyledListItemText>Hardware</StyledListItemText>
                    </ListItem>
                    <ListItem button key="key">
                        <ListItemIcon>
                            <PhoneAndroidOutlinedIcon/>
                        </ListItemIcon>
                        <StyledListItemText>Celulares</StyledListItemText>
                    </ListItem>
                    <ListItem button key="key">
                        <ListItemIcon>
                            <HeadsetOutlinedIcon/>
                        </ListItemIcon>
                        <StyledListItemText>Acessórios</StyledListItemText>
                    </ListItem>

                </List>
            </Drawer>
        </>
    )
}

export default NavigationMenu
