import React, { Component } from "react";

export default class ClassForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  setName = (e) => {
    this.setState({ name: e.target.value });
  };

  setEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  setPassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    return (
      <div className="formContainer">
        <div className="formContainer-left">
          <h1>
            Meet <span className="logo">Tutor</span>
          </h1>
          <p>
            Sign up to get access to the worlds top tutors who will help you in
            your career path.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="formCtn">
              <label>Name</label>
              <input
                type="text"
                value={this.state.name}
                placeholder="Enter your name"
                onChange={this.setName}
              />
            </div>
            <div className="formCtn">
              <label>Email</label>
              <input
                type="email"
                value={this.state.email}
                placeholder="Enter your email"
                onChange={this.setEmail}
              />
            </div>
            <div className="formCtn">
              <label>Password</label>
              <input
                type="password"
                value={this.state.password}
                placeholder="Enter your password"
                onChange={this.setPassword}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="formContainer-right">
          <h1>
            Making <br />
            Dreams <br />
            Come True
          </h1>
        </div>
      </div>
    );
  }
}
