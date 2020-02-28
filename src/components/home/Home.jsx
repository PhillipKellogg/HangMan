import React from "react";
import "./Home.scss";
import Guess from "./../guess/Guess";

import Hm1 from "../../Assets/hangman1.png";
import Hm2 from "../../Assets/hangman2.png";
import Hm3 from "../../Assets/hangman3.png";
import Hm4 from "../../Assets/hangman4.png";
import Hm5 from "../../Assets/hangman5.png";
import Hm6 from "../../Assets/hangman6.png";
import Hm7 from "../../Assets/hangman8.png";

let hangman = Hm3;
let guessArr = [];
let correctArr = [];

let newWord = wrd => {
  guessArr = [];
  for (let i = 0; i < wrd.length; i++) {
    correctArr[i] = wrd[i];
    guessArr[i] = "_";
  }
};

newWord("hello");
console.log(guessArr, correctArr);

export default class Home extends React.Component {
  newGuess = e => {
    //Here we can use this to update the website information.
    e.preventDefault();
    if (e.target.value != "" || undefined || null) {
      for (let i = 0; i < correctArr.length; i++) {
        if (e.target.value === correctArr[i]) {
          guessArr[i] = correctArr[i];
        }
      }
      console.log(e.target.value);
      console.log(guessArr);
    }
  };
  render() {
    return (
      <form onSubmit={this.newGuess}>
        <div class="segment">
          <h1>Hangman</h1>
        </div>
        <img className="hangman__img" src={hangman} alt="" />
        <div className="hangman__input">
          <Guess guess={guessArr.toString()} />
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
              />
            </label>
            {/* <span>_ _ _ _ _ _</span> */}
          </div>
          <button type="submit" class="hangman__btn">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
