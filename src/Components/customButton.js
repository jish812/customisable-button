import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Assets/Css/customButton.css";

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
        <Container className="value-row">
          <Col className="stack-value-column">
            <Row>
              <label>Height:</label>
              <Col className="valueColumn">
                {" "}
                <input
                  type="number"
                  value={this.state.height}
                  onChange={this.changeHeight}
                />
              </Col>
            </Row>
            <Row>
              <label>Width:</label>
              <Col className="valueColumn">
                <input
                  type="number"
                  value={this.state.width}
                  onChange={this.changeWidth}
                />
              </Col>
            </Row>
            <Row>
              <label>Radius:</label>
              <Col className="valueColumn">
                <input
                  type="number"
                  value={this.state.radius}
                  onChange={this.changeRadius}
                />
              </Col>
            </Row>{" "}
            <Row>
              <label>Color:</label>
              <Col className="valueColumn">
                {" "}
                <input
                  type="text"
                  value={this.state.color}
                  onChange={this.changeTag}
                />
              </Col>
            </Row>
          </Col>
          <Col className="button-column">
            <button
              style={{
                display: "inRowne-block",
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
