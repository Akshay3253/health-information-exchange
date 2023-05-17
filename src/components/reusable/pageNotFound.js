import React, { Component } from "react";

import Card from "react-bootstrap/Card";

const cardStyle = {
  borderWidth: "5px",
  margin: "10px",
};

class pageNotFound extends Component {
  render() {
    return (
      <main id="main" role="main">
        <div id="FourZeroFour">
          <Card
            className="text-center"
            style={cardStyle}
            bg="light"
            border="warning"
          >
            <Card.Body>
              <Card.Title>
                <h1>Uh Oh..</h1>
              </Card.Title>
              <Card.Text>
                The page you have requested cannot be found.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </main>
    );
  }
}

export default pageNotFound;
