import React, { Component } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { DASHBOARD } from "../../common/constant";
import { withRouter } from "../../common/withRouter";
import { requestLoginDetails, retrieveTesting } from "../../actions/testAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginDetails: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRedirection = this.handleRedirection.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.loginDetails !== state.loginDetails) {
      console.log(props.loginDetails);
      //Change in props
      return {
        loginDetails: props.loginDetails,
      };
    }
    return null; // No change to state
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // TODO: Send the login credentials to the server using fetch or axios
    this.props.checkUserDetails();
    console.log(this.state.username + this.state.password);
  }

  handleRedirection() {
    const { navigate } = this.props;
    navigate(DASHBOARD);
  }

  render() {
    let counter = this.props.counter;
    return (
      <div className="login-container">
        <p>Counter: {counter}</p>
        <button
          className="btn btn-outline-primary"
          // onClick={() => dispatch(allActions.counterActions.increment())}
          onClick={() => {
            this.props.increment();
          }}
        >
          Increase Counter
        </button>

        <button
          className="btn btn-outline-primary"
          // onClick={() => dispatch(allActions.counterActions.increment())}
          onClick={() => {
            this.handleRedirection();
          }}
        >
          DASHBOARD
        </button>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <b>
              <label htmlFor="username">Username:</label>
            </b>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <b>
              <label htmlFor="password">Password:</label>
            </b>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const counter = state.counter;
  const loginDetails = state.loginDetails;
  return {
    counter,
    loginDetails,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch(retrieveTesting());
  },
  checkUserDetails: () => {
    dispatch(requestLoginDetails());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
