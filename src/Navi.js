import React, {useState} from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler, NavLink,
    UncontrolledDropdown
} from 'reactstrap';

const Navi = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Enoca</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Company
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/company-form">Form</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/company-list">List</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Employee
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="employee-form">Form</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="employee-list">List</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Job
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/job-form/">Form</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/job-list/">List</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </Nav>
                    <NavbarText>Enoca</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navi;