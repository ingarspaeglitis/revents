import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15}}/>
                    Re-vents
                </Menu.Item>
                <Menu.Item name='Events'></Menu.Item>
                <Menu.Item>
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