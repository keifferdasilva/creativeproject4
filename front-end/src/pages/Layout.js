import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';
import axios from 'axios';


class Navbar extends Component {
  constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }


    render() {
      const loggedIn = this.props.loggedIn;
      
      return (
                <>
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link class="navbar-brand" to="/">The Game</Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/about">About</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/store">Store</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/community">Community</Link>
                  </li>
                </ul>
                    {loggedIn ? (
                      <ul class='navbar-nav ml-auto'>
                        <li class='nav-item'>
                          <span class='nav-link'>{this.props.user}</span>
                        </li>
                        <li class='nav-item'>
                          <Link class='nav-link' to="#" onClick={this.logout}>
                          Logout</Link>
                        </li>
                      </ul>
                    ) : (
                      <ul class='navbar-nav ml-auto'>
                        <li class='nav-item'>
                            <Link class='nav-link' to="/login">Login</Link>
                        </li>
                        <li>
                            <Link class='nav-link play' to="/register">Play Now!</Link>
                        </li>
                      </ul>
                    )}
              </div>
            </nav>
        
              <Outlet />
            </>
        );
    }
}



const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">The Game</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/store">Store</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/community">Community</Link>
          </li>
        </ul>
        <ul class='navbar-nav ml-auto'>
            <li class='nav-item'>
                <Link class='nav-link' to="/login">Login</Link>
            </li>
            <li>
                <Link class='nav-link play' to="/register">Play Now!</Link>
            </li>
        </ul>
      </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Navbar;