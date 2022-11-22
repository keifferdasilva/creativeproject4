import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Store from "./pages/Store";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import React, { Component } from 'react';
import axios from 'axios';


class App1 extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  
  render() {
    return (
    <BrowserRouter basename="/creativeproject4/front-end/build">
      <Routes>
        <Route path="/" element={<Layout updateUser={this.updateUser} loggedIn={this.state.loggedIn} user={this.state.username}/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="community" element={<Community />} />
          <Route path="store" element={<Store />} />
          <Route path="login" element={<Login updateUser={this.updateUser}/>} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  }


}

/*export default function App() {
  return (
    <BrowserRouter basename="/creativeproject4/front-end/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="community" element={<Community />} />
          <Route path="store" element={<Store />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}*/

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
export default App1;