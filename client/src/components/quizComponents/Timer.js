import React, { Component } from "react";
import Quiz from "../../pages/Quiz/Quiz";

export default class Timer extends Component {
  state = {
    seconds: this.props.seconds,
    brick: this.props.brick,
  }
  render(props) {
    return (
      <div>
        {this.props.seconds === 0
          ? <h2 className="white">Brick!</h2>
          : <h2 className="white">Shot Clock: {this.props.seconds < 10 ? `0${this.props.seconds}` : this.props.seconds}</h2>
        }
      </div>
    );
  }
}
