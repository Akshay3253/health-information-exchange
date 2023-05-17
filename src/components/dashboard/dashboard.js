import React, { Component } from "react";
import { withRouter } from "../../common/withRouter";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>DASHBOARD</div>;
  }
}

const mapStateToProps = (state) => {};

export default withRouter(connect(mapStateToProps)(Dashboard));
