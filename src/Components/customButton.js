/** @format */

import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Assets/Css/customButton.css';

export default class customButton extends Component {
	constructor() {
		super();
		this.state = {
			color: 'white',
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
			<div>
				{' '}
				<div className='col-md-8'>
					{' '}
					<button
						style={{
							display: 'inRowne-block',
							alignItems: 'center',
							height: this.state.height,
							width: this.state.width,
							borderRadius: this.state.radius,
							backgroundColor: this.state.color,
							alignSelf: 'center',
						}}>
						click
					</button>
				</div>
				<div className='col'>
					<div className='row'>
						{' '}
						<label>Height:</label>
						<input
							type='number'
							value={this.state.height}
							onChange={this.changeHeight}
						/>
					</div>
					<div className='row'>
						{' '}
						<label>Width:</label>
						<input
							type='number'
							value={this.state.width}
							onChange={this.changeWidth}
						/>
					</div>
					<div className='row'>
						{' '}
						<label>Radius:</label>
						<input
							type='number'
							value={this.state.radius}
							onChange={this.changeRadius}
						/>
					</div>
					<div className='row'>
						<label>Color:</label>{' '}
						<input
							type='text'
							value={this.state.color}
							onChange={this.changeTag}
						/>
					</div>
				</div>
			</div>
		);
	}
}
