import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import LoginPage from './components/LoginPage';
import CalendarPage from './components/CalendarPage';
import { InitCalendar } from './actions/list';

class App extends Component {
  componentWillMount(){
    this.props.dispatch(InitCalendar());
  }
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
