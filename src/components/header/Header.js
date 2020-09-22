import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <div>
            <Navbar className='mt-4 mb-2 p-3'>
                <NavbarBrand>Watchlist</NavbarBrand>
                <Nav horizontal >
                    <NavItem className='m-2'>
                        <Link id='RouterNavBrand' to='/'>
                            Watchlist{' '}
                        </Link>
                    </NavItem>
                    <NavItem className='m-2'>
                        <Link to='/add'> Add </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;
