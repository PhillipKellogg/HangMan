import React from "react";
// import "./Home.scss";

// let phrase = " ";
export default class Guess extends React.Component {
  // phrase = this.props.guess;
  state = { phrase: null };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.guess !== phrase) {
  //     // return(
  //     // // phrase = this.props.guess
  //     // );
  //   }
  // }
  render() {
    // this.setState = {
    //   phrase:this.props.guess;
    // }
    // console.log(this.props.guess);
    console.log(`GUESSS COMPONENT  ${this.props.guess}`);

    return <h2 className="guess">{this.state.phrase}</h2>;
  }
}
