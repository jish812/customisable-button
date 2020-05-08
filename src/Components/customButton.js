import React, { Component, Fragment } from "react";

export default class customButton extends Component {
  constructor() {
    super();
    this.state = {
      color: "white",
      height: 50,
    };
  }
  changeHeight = (event) => {
    this.setState({
      height: event.target.valueAsNumber,
    });
  };
  changeTag = (event) => {
    this.setState({
      color: event.target.value,
    });
  };
  render() {
    return (
      <Fragment>
        <div className="properties">
          {" "}
          <ul style={{ listStyle: "none" }}>
            <li>
              <label>height :</label>
              <input
                type="number"
                value={this.state.height}
                onChange={this.changeHeight}
              />
            </li>
            <li>
              <label>Color:</label>
              <input
                type="text"
                value={this.state.color}
                onChange={this.changeTag}
              />
            </li>
          </ul>
        </div>
        <button
          style={{
            alignItems: "center",
            height: this.state.height,
            backgroundColor: this.state.color,
            marginTop: 100,
            marginLeft: 200,
          }}
        >
          click
        </button>
      </Fragment>
    );
  }
}
