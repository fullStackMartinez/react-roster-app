import React, { Component } from 'react';

class Roster extends Component {
	constructor() {
		super();
		this.state = {
			title: 'Daily Drills',
			newDrill: '',
			drills: []
		}
	}
//Define function that will fire when we click our button
	formSubmitted(event) {
		event.preventDefault();
		this.setState({
			drills: [...this.state.drills, {
				name: this.state.newDrill,
				completed: false
			}]
		})
	}

	//Define listener to our input as a function
	newDrillAdded(event) {
		this.setState({
			newDrill: event.target.value
		})
	}
	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>

				<form onSubmit={this.formSubmitted.bind(this)}>

					<label htmlFor="newDrill">Add A Drill</label>

					<input onChange={this.newDrillAdded.bind(this)} id="newDrill" name="newDrill" />

					<button type="submit">Add Drill</button>

				</form>

				<ul>
					{this.state.drills.map(drills =>{
							return <li>{drills.name}</li>
						}
					)}
				</ul>
			</div>
		);
	}
}

export default Roster;