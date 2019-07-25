import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
        UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './style.css';

class NavBar extends Component  {
    constructor(props){
        super(props);

        this.state = {
            navbarOpen: false
        }
    }

    toggleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    }

    render() {
        return (
            <div>
                <Navbar style={{backgroundColor: "rgb(68, 8, 8)"}} expand="md">

                    <NavbarBrand href="/">MERN App Template</NavbarBrand>

                    <NavbarToggler onClick={this.toggleNavbar} />

                    <Collapse isOpen={this.state.navbarOpen} navbar>

                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/workbench">Workbench</NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>

                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>

                                <DropdownMenu right>

                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>

                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>

                                    <DropdownItem divider />

                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>

                                </DropdownMenu>

                            </UncontrolledDropdown>
                            
                        </Nav>

                    </Collapse>

                </Navbar>
            </div>
        );
    }

}

export default NavBar