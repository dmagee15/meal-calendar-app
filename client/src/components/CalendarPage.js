import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from './../actions/auth';
import { Add, Remove, Check, ClearAll, Update, Initialize } from './../actions/list';
import { checkUser } from './../actions/auth';
import { daysInMonth } from './../utility/month';
import { generateCalendar } from './../utility/generateCalendar';
import './../css/CalendarPage.css';

class CalendarPage extends Component{
    state = {
        addInput: ""
    }
    constructor(props){
        super(props);
        if(!this.props.user&&this.props.loggedIn===false){
            this.props.dispatch(checkUser());
        }else{
            this.props.dispatch(Initialize());
        }
    }
    componentDidUpdate(prevProps) {
        let tasks = this.props.tasks.slice();
        let user = this.props.user;
        if(JSON.stringify(prevProps.tasks)!==JSON.stringify(tasks)){
            this.props.dispatch(Update(tasks, user));
        }
      }
    logoutHandler = () => {
        this.props.dispatch(logOut());
    }
    changeInputHandler = (event) => {
        this.setState({
            addInput: event.target.value
        });
    }
    addHandler = () => {
        this.props.dispatch(Add(this.state.addInput));
        this.setState({
            addInput: ""
        });
    }
    removeHandler = (index) => {
        this.props.dispatch(Remove(index));
    }
    checkHandler = (event, index) => {
        this.props.dispatch(Check(index));
    }
    clearAllHandler = () => {
        this.props.dispatch(ClearAll());
    }
    render(){
    let date = new Date();
    let year = date.getFullYear();
    let day = date.getDate();
    let dayOfWeek = date.getDay();
    let month = date.getMonth()+1;

    let calendar = generateCalendar(date);
    let numDaysInCurrentMonth = daysInMonth(month);
    let numDaysInPreviousMonth = (month!==1)?daysInMonth(month-1):31;
    let numDaysInNextMonth = (month!==12)?daysInMonth(month+1):31;
    
    console.log(calendar);

        return (
            <div className="calendarPageContainer">
                <div className="weekContainer">
                    <div className="dayLabelContainer">
                        <p className="dayLabel">S</p>
                    </div>
                    <div className="dayLabelContainer">
                        <p className="dayLabel">M</p>
                    </div>
                    <div className="dayLabelContainer">
                        <p className="dayLabel">T</p>
                    </div>
                    <div className="dayLabelContainer">
                        <p className="dayLabel">W</p>
                    </div>
                    <div className="dayLabelContainer">
                        <p className="dayLabel">T</p>
                    </div>
                    <div className="dayLabelContainer">
                        <p className="dayLabel">F</p>
                    </div>
                    <div className="dayLabelContainer">
                        <p className="dayLabel">S</p>
                    </div>
                </div>
                    {calendar}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
      tasks: state.tasks,
      loggedIn: state.loggedIn
    }
  }

export default connect(mapStateToProps)(CalendarPage);