import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Content from "./Content";

export default class customButton extends Component {
  constructor() {
    super();
    this.state = {
      color: "white",
      height: 50,
      width: 40,
      radius: 10,
    };
  }
  changeRadius = (event) => {
    this.setState({
      radius: event.target.valueAsNumber,
    });
  };
  changeTag = (event) => {
    this.setState({
      color: event.target.value,
    });
  };
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
  changeWidth = (event) => {
    this.setState({
      width: event.target.valueAsNumber,
    });
  };
  render() {
    return (
      <Fragment>
        <Container>
          <Col>
            {" "}
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
                  <label>width :</label>
                  <input
                    type="number"
                    value={this.state.width}
                    onChange={this.changeWidth}
                  />
                </li>
                <li>
                  <label>radius :</label>
                  <input
                    type="number"
                    value={this.state.radius}
                    onChange={this.changeRadius}
                  />
                </li>{" "}
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
          </Col>
          <Col>
            <button
              style={{
                display: "inline-block",
                alignItems: "center",
                height: this.state.height,
                width: this.state.width,
                borderRadius: this.state.radius,
                backgroundColor: this.state.color,
                marginTop: 100,
                marginLeft: 200,
              }}
            >
              click
            </button>
          </Col>
        </Container>
      </Fragment>
    );
  }
}
