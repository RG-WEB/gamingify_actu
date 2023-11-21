import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import Logo from "../../public/img/logo.png";
import Gamepad from "../../public/img/gamepad.png";
const NavbarBootstrap = ({ logout, user, toggleDarkTheme, isDarkTheme }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="justify-content-center">
        <Navbar.Brand href="/">
          <img className="logo" src={Logo} alt="logo" />
          <img className="logo" src={Gamepad} alt="gamepad" />
        </Navbar.Brand>
        <div className="icon-container">
          {user && (
            <>
              <span className="nav-user-name">{user?.name}</span>
              <button className="submit-btn" onClick={logout}>
                Déconnexion
              </button>
              <NavLink to="/dashboard">
                <img
                  src="../public/img\profile-user.png"
                  className="profile-user"
                  alt="profile-user-icon"
                />
              </NavLink>
            </>
          )}
          <Button variant="light" onClick={toggleDarkTheme}>
            {isDarkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
          </Button>

          <Navbar.Toggle
            className="navbar-dark"
            aria-controls="basic-navbar-nav"
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link">
              Accueil
            </NavLink>
            <NavLink to="/news" className="nav-link">
              Actualités
            </NavLink>
            {/* <NavLink to="/community" className="nav-link">
              Communauté
            </NavLink> */}
            <NavLink to="/authentificate" className="nav-link">
              Connexion/Inscription
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarBootstrap;
