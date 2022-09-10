import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export class Reset extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <h3 className="frgTitle">Reset password</h3>
        <span class="material-symbols-outlined">lock</span>
        <div className="form-group">
          <label className="label-text">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => (this.password = e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="label-text">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => (this.password = e.target.value)}
          />
        </div>

        <button className="subButton">Submit</button>
      </form>
    );
  }
}
