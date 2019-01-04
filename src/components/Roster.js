import React, { Component } from 'react';

class Roster extends Component {
	constructor() {
		super();
		this.state = {
			title: 'Player Roster',
			newPlayer: '',
			players: []
		}
	}
//Define function that will fire when we click our button
	formSubmitted(event) {
		event.preventDefault();
		this.setState({
			playerClear: '',
			players: [...this.state.players, {
				name: this.state.newPlayer,
			}]
		})
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

					<input onChange={this.newPlayerAdded.bind(this)} id="newRoster" name="newRoster" value={this.state.playerClear} />

					<button type="submit">Add Player</button>

				</form>

				<ul>
					{this.state.players.map(players =>{
						return <li key={players.name}>{players.name}</li>
						}
					)}
				</ul>
			</div>
		);
	}
}

export default Roster;