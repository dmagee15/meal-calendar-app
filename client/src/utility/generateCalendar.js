import { daysInMonth } from './../utility/month';
import React from 'react';

export function generateCalendar(date){
    let year = date.getFullYear();
    let day = date.getDate();
    let dayOfWeek = date.getDay();
    let month = date.getMonth()+1;
    let calendar = [];

    let days = [];
    let months = [];

    for(let x=0;x<5;x++){
        if((day+(x-2)*7)<1){
            days[x] = day+(x-2)*7+daysInMonth(month-1)
            months[x] = month-1;
        }
        else if((day+(x-2)*7)>daysInMonth(month)){
            days[x] = day+(x-2)*7-daysInMonth(month);
            months[x] = month+1;
        }
        else{
            days[x] = day+(x-2)*7;
            months[x] = month;
        }
    }
    console.log(days);

    function calculateWeek(dayOfWeek, day, month){
        let calculateRow = [];
        for(let x=day-dayOfWeek;x<day-dayOfWeek+7;x++){
            if(x>daysInMonth(month)){
                calculateRow.push(
                    <div className="day mid">
                    <div className="highlightShape">
                    </div>
                    <p className="dayNum">{x-daysInMonth(month+1)}</p>
                    </div>
                )
            }
            else if(x<1){
                    calculateRow.push(
                        <div className="day mid">
                        <div className="highlightShape">
                        </div>
                        <p className="dayNum">{daysInMonth(month-1)+x}</p>
                        </div>
                    )
                }
            else{
                calculateRow.push(
                    <div className="day mid">
                    <div className="highlightShape">
                    </div>
                    <p className="dayNum">{x}</p>
                    </div>
                )
            }
        }
        return (
            <div className="weekContainer">
                {calculateRow}
            </div>
            );
    }
    for(let x=0;x<days.length;x++){
        calendar.push(calculateWeek(dayOfWeek, days[x], months[x]));
    }

    //Current Week
    return calendar;
}