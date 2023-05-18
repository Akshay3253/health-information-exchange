import React, { Component } from "react";
import { withRouter } from "../../common/withRouter";
import { connect } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardStyle = {
  borderWidth: "2px",
  margin: "10px",
  borderRadius: "25px"
};

class Dashboard extends Component {
  render() {
    return <div id="cardSetUp" className="login-container">
    <Col className="pt-5">
      <Card
        className="text-center"
        style={cardStyle}
        bg="light"
      >
        <Card.Body>
        <FontAwesomeIcon icon="search" size="2x"/>
          <Card.Title>
            <h2>Patient Search</h2>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col className="pb-5 mt-5">
      <Card
        className="text-center"
        style={cardStyle}
        bg="light"
      >
        <Card.Body>
        <FontAwesomeIcon icon="upload" size="2x"/>
          <Card.Title>
            <h2>Upload</h2>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
</div>;
  }
}

const mapStateToProps = (state) => {};

export default withRouter(connect(mapStateToProps)(Dashboard));
