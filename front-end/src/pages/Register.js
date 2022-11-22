import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		//request to server to add a new username/password
		axios.post('/user/signup', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				if (!response.data.errmsg) {
					this.setState({
                        redirectTo: '/login'
                    })
				} 
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)
			})
	}

	render() {
		if (this.state.redirectTo) {
	        return <Navigate to={{ pathname: this.state.redirectTo }} />
	    } else {
			return (
				<div>
					<h4>Sign up</h4>
					<form >
						<input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<button
							onClick={this.handleSubmit}
							type="submit"
						>Sign up</button>
					</form>
				</div>
			)
		}
	}
}

export default Signup