export function daysInMonth(month, year){
    switch(month.toString()){
        case '-1': return 30;
        case '-2': return 31;
        case '-3': return 30;
        case '0': return 31;
        case '1': return 31;
        case '2': {
            if(year%4===0){
                return 29;
            }
            else{
                return 28;
            }
        }
        case '3': return 31;
        case '4': return 30;
        case '5': return 31;
        case '6': return 30;
        case '7': return 31;
        case '8': return 31;
        case '9': return 30;
        case '10': return 31;
        case '11': return 30;
        case '12': return 31;
        case '13': return 31;
        case '14': {
            if(year%4===0){
                return 29;
            }
            else{
                return 28;
            }
        }
        case '15': return 31;
        default: return 31;
    }
}

export function getMonth(num){
    switch(num.toString()){
        case '1': return "Jan";
        case '2': return "Feb";
        case '3': return "Mar";
        case '4': return "Apr";
        case '5': return "May";
        case '6': return "Jun";
        case '7': return "Jul";
        case '8': return "Aug";
        case '9': return "Sep";
        case '10': return "Oct";
        case '11': return "Nov";
        case '12': return "Dec";
        default: return "Jan";
    }
}