import axios from 'axios';
import { generateDayArray } from './../utility/generateDayArray';

export function InitCalendar(){
    return {
            type: 'INIT_CALENDAR',
            payload: generateDayArray()
        }
}

export function changeActive(index){
    return {
            type: 'CHANGE_ACTIVE',
            payload: index
        }
}

export function Add(content){
    return function(dispatch){
        dispatch({
            type: 'ADD',
            payload: content
        });
    }
    
}

export function Remove(index){
    return function(dispatch){
        dispatch({
            type: 'REMOVE',
            payload: index
        });
    }
}

export function ClearAll(index){
    return function(dispatch){
        dispatch({
            type: 'CLEAR_ALL',
            payload: index
        });
    }
}

export function Check(index){
    return function(dispatch){
        dispatch({
            type: 'CHECK',
            payload: index
        });
    }
    
}

export function Initialize(){
        return function(dispatch){
            const config = {
                headers: {'Authorization': "bearer " + localStorage.getItem("token")}
            };
            axios.get('/access',config)
                .then(function(response){
            }).catch(function(err){
                console.log(err);
            });
        }
}

export function Update(tasks, user){
    return function(dispatch){
        const config = {
            headers: {'Authorization': "bearer " + localStorage.getItem("token")}
        };
        axios.post('/update', tasks, config)
        .then(function(response){
        }).catch(function(err){
            console.log(err);
        });
    }
    
}