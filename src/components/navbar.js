import React, {Component} from "react";
class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Shopiee - Items : {this.props.count}
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
