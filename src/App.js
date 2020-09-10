import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"

import Navbar from "./components/navbar.component"
import ListUser from "./components/list-user.component"
import EditUser from "./components/edit-user.component"
import RegisterUser from "./components/register-user.component"

function App() {
  return (
    <Router>
      <div className = "container">
        <Navbar />
        <br />
        <Route path="/" exact component={ListUser} />
        <Route path="/edit/:id" component={EditUser} />
        <Route path="/create" component={RegisterUser} />
      </div>
    </Router>
  )
}

export default App
