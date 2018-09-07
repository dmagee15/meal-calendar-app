import { daysInMonth, getMonth } from './../utility/month';
import React from 'react';

export function generateCalendar(date){

    let calendar = [];
    let previousYear = date.getFullYear()-1;

    let dayIndex = 1;
    let monthIndex = 1;
    let yearIndex = previousYear;
    let dateIndex = new Date(previousYear, 0, 1);
    let dayOfWeekIndex = dateIndex.getDay()+1;

    let daysArray = [];

    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth()+1;
    let currentDayOfWeek = currentDate.getDay()+1;
    let currentYear = currentDate.getFullYear();
    let currentDayIndex = 0;

    while(true){
        let newDay = {
            day: dayIndex,
            month: monthIndex,
            year: yearIndex,
            dayOfWeek: dayOfWeekIndex
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


    //Build JSX
    let targetIndex = currentDayIndex-(daysArray[currentDayIndex].dayOfWeek-1)-14;
    let calculateRow = [];
    for (let x=targetIndex;x<targetIndex+35;x++){
        let endWeek = daysArray[x].dayOfWeek===1||daysArray[x].dayOfWeek===7?"end":"mid";
        calculateRow.push(
                    <div className={"day "+endWeek} key={daysArray[x].day.toString()+daysArray[x].month.toString()+daysArray[x].year.toString()}>
                        <div className="highlightShape">
                        </div>
                        <p className="dayNum">{daysArray[x].day}</p>
                    </div>
        );
        if(daysArray[x].dayOfWeek===7){
            let tempArray = (
                         <div className="weekContainer" key={daysArray[x].day.toString()+daysArray[x].month.toString()+daysArray[x].year.toString()+"week"}>
                             {calculateRow}
                         </div>
                         );
            calendar.push(tempArray);
            calculateRow = [];
        }
    }

    // let year = date.getFullYear();
    // let day = date.getDate();
    // let dayOfWeek = date.getDay();
    // let month = date.getMonth()+1;
    // let calendar = [];

    // let currentDay = date.getDate();
    // let currentMonth = date.getMonth()+1;

    // let days = [];
    // let months = [];

    // for(let x=0;x<5;x++){
    //     if((day+(x-2)*7)<1){
    //         days[x] = day+(x-2)*7+daysInMonth(month-1)
    //         months[x] = month-1;
    //     }
    //     else if((day+(x-2)*7)>daysInMonth(month)){
    //         days[x] = day+(x-2)*7-daysInMonth(month);
    //         months[x] = month+1;
    //     }
    //     else{
    //         days[x] = day+(x-2)*7;
    //         months[x] = month;
    //     }
    // }
    // console.log(days);

    // function calculateWeek(dayOfWeek, day, month){
    //     let calculateRow = [];
    //     for(let x=day-dayOfWeek;x<day-dayOfWeek+7;x++){
    //         let endWeek = (x===(day-dayOfWeek)||x===(day-dayOfWeek+6))?"end":"mid";
    //         let bMonth = (month!==currentMonth
    //         ||(x>daysInMonth(month)&&(x-daysInMonth(month+1))>0)
    //         ||(x<1&&(daysInMonth(month-1)+x)<daysInMonth(month-1)))?"exteriorHighlight":""
            
    //         if(x>daysInMonth(month)){
    //             calculateRow.push(
    //                 <div className={"day "+endWeek}>
    //                 <div className="highlightShape">
    //                 </div>
    //                 <div className={bMonth}>
    //                 </div>
    //                 <p className="dayNum">{x-daysInMonth(month+1)}</p>
    //                 </div>
    //             )
    //         }
    //         else if(x<1){
    //                 calculateRow.push(
    //                     <div className={"day "+endWeek}>
    //                     <div className="highlightShape">
    //                     </div>
    //                     <div className={bMonth}>
    //                     </div>
    //                     <p className="dayNum">{daysInMonth(month-1)+x}</p>
    //                     </div>
    //                 )
    //             }
    //         else{
    //             calculateRow.push(
    //                 <div className={"day "+endWeek}>
    //                 <div className="highlightShape">
    //                 </div>
    //                 <div className={bMonth}>
    //                 </div>
    //                 <p className="dayMonth">{getMonth(currentMonth)}</p>
    //                 <p className="dayNum">{x}</p>
    //                 </div>
    //             )
    //         }
    //     }
    //     return (
    //         <div className="weekContainer">
    //             {calculateRow}
    //         </div>
    //         );
    // }
    // for(let x=0;x<days.length;x++){
    //     calendar.push(calculateWeek(dayOfWeek, days[x], months[x]));
    // }

    //Current Week
    return calendar;
}