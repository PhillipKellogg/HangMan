import React from "react";
// import "./Home.scss";

export default class Guess extends React.Component {
  render() {
    return <h2 className="guess">{this.props.guess}</h2>;
  }
}
