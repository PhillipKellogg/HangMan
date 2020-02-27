import React from "react";
import "./Home.scss";

export default class Home extends React.Component {
  render() {
    return (
      <form>
        <div class="segment">
          <h1>Article</h1>
        </div>

        <label>
          <input type="text" placeholder="Topic" maxlength="1" required />
        </label>

        <button class="red" type="button">
          <i class="icon ion-md-lock"></i> Submit
        </button>
      </form>
    );
  }
}
