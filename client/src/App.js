import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import LoginPage from './components/LoginPage';
import CalendarPage from './components/CalendarPage';

class App extends Component {

  render() {
  let display = (localStorage.getItem("token")) ? <CalendarPage /> : <LoginPage />;

    return (
      <div className="App">
        { display }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    tasks: state.tasks,
    loggedIn: state.loggedIn,
    loaded: state.loaded
  }
}

export default connect(mapStateToProps)(App);
