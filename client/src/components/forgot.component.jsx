import React, { Component } from "react";
export class Forgot extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <h3 className="frgTitle">Forgot password</h3>

        <div className="form-group">
          <label className="label-text">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => (this.email = e.target.value)}
          />
        </div>

        <button className="subButton">Submit</button>
      </form>
    );
  }
}
