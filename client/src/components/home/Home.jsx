import React from "react";
import "./Home.scss";
import Guess from "./../guess/Guess";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Hm1 from "../../Assets/hangman1.png";
import Hm2 from "../../Assets/hangman2.png";
import Hm3 from "../../Assets/hangman3.png";
import Hm4 from "../../Assets/hangman4.png";
import Hm5 from "../../Assets/hangman5.png";
import Hm6 from "../../Assets/hangman6.png";
import Hm7 from "../../Assets/hangman8.png";
import Hm8 from "../../Assets/hangman9.png";

const easyURL = "http://localhost:8000/";
const mediumURL = "http://localhost:8000/medium";
const hardURL = "http://localhost:8000/hard";
let hangman = Hm3;
let guessArr = [];
let correctArr = [];
let error = 0;
let anything = false;
let newWord = wrd => {
  guessArr = [];
  for (let i = 0; i < wrd.length; i++) {
    correctArr[i] = wrd[i];
    guessArr[i] = "_";
  }
};
// newWord(newWord1);
console.log(guessArr, correctArr);

console.log(guessArr, correctArr);

let alphabet = [];
export default class Home extends React.Component {
  componentDidMount() {
    axios.get(easyURL).then(response => {
      console.log(response.data);
      newWord(response.data[Math.floor(Math.random() * response.data.length)]);
      this.setState({
        guess: guessArr
      });
    });
  }

  state = { guess: guessArr, image: Hm1, ltr: [] };

  newGuess = e => {
    //Here we can use this to update the website information.
    e.preventDefault();
    anything = false;
    if (e.target.value !== "" || undefined || null) {
      for (let i = 0; i < correctArr.length; i++) {
        if (e.target.value === correctArr[i]) {
          guessArr[i] = correctArr[i];
          anything = true;
          this.setState({
            guess: guessArr
          });
        }
      }
      if (!anything) {
        error += 1;
        alphabet.push(e.target.value);
        this.setState({
          // ltr.push(e.target.value)
          ltr: alphabet
        });
        console.log(this.state.ltr);

        if (error === 1) {
          hangman = Hm2;
        } else if (error === 2) {
          hangman = Hm3;
        } else if (error === 3) {
          console.log(error);
          hangman = Hm4;
        } else if (error === 4) {
          hangman = Hm5;
        } else if (error === 5) {
          hangman = Hm6;
        } else if (error === 6) {
          hangman = Hm7;
        }
        this.setState({
          image: hangman
        });
      }

      console.log(e.target.value);
      console.log(correctArr);
      if (this.state.guess.toString() === correctArr.toString()) {
        this.setState({
          image: Hm8
        });
      }
      console.log(this.state.guess);
    }
    // document.getElementById("Goku").value = "";
    e.target.value = "";
  };

  // componentDidUpdate() {}

  render() {
    // console.log(this.state.guess);

    return (
      <form onSubmit={this.newGuess}>
        <div class="segment">
          <div className="hangman__btn--wrapper">
            <Link to="/">
              <button type="submit" class="hangman__btn">
                Easy
              </button>
            </Link>
            <Link to="/medium">
              <button type="submit" class="hangman__btn">
                Medium
              </button>
            </Link>
            <Link to="/hard">
              <button type="submit" class="hangman__btn">
                Hard
              </button>
            </Link>
          </div>
          <h1>Hangman</h1>
          <h2>USED LETTERS</h2>
          <h2 className="used">
            {/* {console.log(this.state.ltr.alphabet)} */}
            <strike>{this.state.ltr.toString()}</strike>
          </h2>
        </div>
        <img className="hangman__img" src={this.state.image} alt="" />
        <div className="hangman__input">
          <h2 className="guess">{this.state.guess.toString()} </h2>
          {/* <h2 className="guess">{guessArr.toString()}</h2> */}
          <div>
            <label>
              <input
                type="text"
                placeholder="Guess"
                maxlength="1"
                required
                onChange={this.newGuess}
                className="hangman__text"
                // id="Goku"
              />
            </label>
            {/* <span>_ _ _ _ _ _</span> */}
          </div>
        </div>
      </form>
    );
  }
}
