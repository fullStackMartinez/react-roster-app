import React, { Component } from 'react';

class Roster extends Component {
	constructor() {
		super();
		this.state = {
			title: 'Player Roster',
			newPlayer: ''
		}
	}
//Define function that will fire when we click our button
	formSubmitted(event) {
		event.preventDefault();
		console.log(this.state.newPlayer);
	}

	//Define listener to our input as a function
	newPlayerAdded(event) {
		this.setState({
			newPlayer: event.target.value
		})
	}
	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>

				<form onSubmit={this.formSubmitted.bind(this)}>

					<label htmlFor="newRoster">Add Player to Roster</label>

					<input onChange={this.newPlayerAdded.bind(this)} id="newRoster" name="newRoster" />

					<button type="submit">Add Player</button>

				</form>
			</div>
		);
	}
}

export default Roster;