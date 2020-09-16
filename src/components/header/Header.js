import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,


} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color='light' light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link className='mr-3' to='/watchlist'>Watchlist  </Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/add'> Add </Link>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default Header;