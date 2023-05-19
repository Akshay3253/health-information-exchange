import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

const Header = () => {
  return (
    <Navbar style={{backgroundColor:"rgb(232 230 230)"}} variant="light" fixed="top">
      <Container className="justify-content-start m-0">
        <img alt="" src="/logo-HIE.png" className="nav-logo pt-3" />
      </Container>
    </Navbar>
  );
};

export default Header;
