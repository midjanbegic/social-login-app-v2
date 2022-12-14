import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-signUp">
        <h3 className="h3">Sign Up</h3>

        <div className="mb-3">
          <label className="l-text">First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label className="l-text">Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label className="l-text">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label className="l-text">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
}
