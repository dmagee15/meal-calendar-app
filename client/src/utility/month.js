export function daysInMonth(month, year){
    switch(month){
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