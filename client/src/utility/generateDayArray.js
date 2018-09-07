import { daysInMonth, getMonth } from './../utility/month';
import React from 'react';

export function generateDayArray(){

    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth()+1;
    let currentYear = currentDate.getFullYear();
    let currentDayIndex = 0;
    let previousYear = currentDate.getFullYear()-1;

    let dayIndex = 1;
    let monthIndex = 1;
    let yearIndex = previousYear;
    let dateIndex = new Date(previousYear, 0, 1);
    let dayOfWeekIndex = dateIndex.getDay()+1;

    let daysArray = [];


    while(true){
        let newDay = {
            day: dayIndex,
            month: monthIndex,
            year: yearIndex,
            dayOfWeek: dayOfWeekIndex,
            active: false,
            food: null
        }
        daysArray.push(newDay);

        //Get Current Date Index
        if(dayIndex==currentDay && monthIndex==currentMonth && yearIndex==currentYear){
            currentDayIndex = daysArray.length-1;
        }

        //Break Condition ***
        if(dayIndex === 31 && monthIndex === 12 && yearIndex === previousYear+2){
            break;
        }
        // ***

        //Adjust Date Indices
        if(dayIndex===daysInMonth(monthIndex,yearIndex)){
            if(monthIndex==12){
                dayIndex = 1;
                monthIndex = 1;
                yearIndex++;
                dayOfWeekIndex = (dayOfWeekIndex===7)?1:dayOfWeekIndex+1;
            }
            else{
                monthIndex++;
                dayIndex = 1;
                dayOfWeekIndex = (dayOfWeekIndex===7)?1:dayOfWeekIndex+1;
            }
        }
        else{
            dayIndex++;
            dayOfWeekIndex = (dayOfWeekIndex===7)?1:dayOfWeekIndex+1;
        }

        
    }

    return {
        currentDayIndex: currentDayIndex,
        daysArray: daysArray
    }
}