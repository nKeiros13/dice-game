import React, { Component } from "react";
import Die from "./Die";
import "./RollDie.css";

class RollDie extends Component {
	static defaultProps = {
		sides: ["one", "two", "three", "four", "five", "six"],
	};
	constructor(props) {
		super(props);
		this.state = { die1: "one", die2: "one", isRolling: false };
		this.roll = this.roll.bind(this);
	}
	roll() {
		let r1 = Math.floor(Math.random() * this.props.sides.length);
		let r2 = Math.floor(Math.random() * this.props.sides.length);
		let newDieOne = this.props.sides[r1],
			newDieTwo = this.props.sides[r2];
		this.setState({ die1: newDieOne, die2: newDieTwo, isRolling: true });
		setTimeout(() => {
			this.setState({ isRolling: false });
		}, 1000);
	}
	render() {
		return (
			<div className="RollDie">
				<div className="RollDie-container">
					<Die face={this.state.die1} isRolling={this.state.isRolling} />
					<Die face={this.state.die2} isRolling={this.state.isRolling} />
				</div>
				<button onClick={this.roll} disabled={this.state.isRolling}>
					{this.state.isRolling ? "Rolling..." : "Roll Die!"}
				</button>
			</div>
		);
	}
}
export default RollDie;
