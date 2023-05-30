import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { withRouter } from "../../common/withRouter";
import { Component } from "react";
import { DASHBOARD } from "../../common/constant";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleRedirection = this.handleRedirection.bind(this);
  }

  handleRedirection(url) {
    const { navigate } = this.props;
    navigate(url);
  }

  render() {
    return (
      <Navbar
        style={{ backgroundColor: "rgb(232 230 230)" }}
        variant="light"
        fixed="top"
      >
        <Container className="justify-content-start m-0">
          <img alt="" src="/logo-HIE.png" className="nav-logo pt-3" />
        </Container>
        {!this.props.loginDetails?.userExists ? null : (
          <Container className="justify-content-end m-0">
            <FontAwesomeIcon
              icon="home"
              size="2x"
              onClick={() => {
                this.handleRedirection(DASHBOARD);
              }}
              className="cursorPointer"
              title="Dashboard"
            />
            <FontAwesomeIcon icon="user" size="2x" className="ml-3" />
            <p className="userIcon">
              {this.props.loginDetails.FirstName}{" "}
              {this.props.loginDetails.LastName}
            </p>
          </Container>
        )}
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  const loginDetails = state.loginDetails;
  return {
    loginDetails,
  };
};

export default withRouter(connect(mapStateToProps)(Header));
