import React, { Component } from "react";
import { withRouter } from "../../common/withRouter";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return <div>DASHBOARD</div>;
  }
}

const mapStateToProps = (state) => {};

export default withRouter(connect(mapStateToProps)(Dashboard));
