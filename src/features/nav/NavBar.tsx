import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15}}/>
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Events'></Menu.Item>
                <Menu.Item as={NavLink} to='/sandbox' name='Sandbox'></Menu.Item>
                <Menu.Item as={NavLink} to='/createEvent'>
                    <Button positive inverted content='Create event'></Button>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login'></Button>
                    <Button basic inverted content='Register' style={{ marginLeft: '0.5em'}}></Button>
                </Menu.Item>
            </Container>
        </Menu>
    );
}