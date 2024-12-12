import React, { useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { navbarBrand, navs } from "../../config/config";
import logoImage from "../Images/logoImage.png";
import "../NavBar/NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const buttonStyle = {
    width: '100%', // Default width for mobile
    maxWidth: '183px', // Maximum width
  };
  const navRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
    setSearchQuery("");
    setIsCollapsed(true);
  };

  const handleNavClick = () => {
    setIsCollapsed(true);
  };

  const isSearchButtonDisabled = searchQuery.trim() === "";

  return (
    <>
      <Navbar
        ref={navRef}
        className="navbar"
        variant="dark"
        expand="lg"
        fixed="top"
        expanded={!isCollapsed}
      >
        <Navbar.Brand className="nav-brand" href="/">
          <img src={logoImage} alt="Logo" className="logo" />
          {navbarBrand}
        </Navbar.Brand>
        {isCollapsed && (
          <Navbar.Toggle
            className="border-0"
            aria-controls="basic-navbar-nav"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        )}

        {!isCollapsed && (
          <IoCloseOutline
            size={40}
            className="close-btn"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        )}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" onClick={handleNavClick}>
            {navs.map((navItem) => (
              <LinkContainer to={navItem.page} key={uuidv4()}>
                <Nav.Link className="nav-item">{navItem.nav}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
          <a href="https://www.buymeacoffee.com/rohangouda"><img style={buttonStyle} src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=rohangouda&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>
          <Form className="search-form" onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Explore news..."
              className="form-input form-control-lg mt-lg-2 mt-md-2 mt-sm-2 mt-xl-0"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Button
              className="search-btn mt-lg-2 ml-2 mt-md-2 mt-sm-2 mt-xl-0"
              onClick={handleSubmit}
              disabled={isSearchButtonDisabled}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
