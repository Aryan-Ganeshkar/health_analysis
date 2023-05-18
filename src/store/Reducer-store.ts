
import {UPDATE_BP,UPDATE_HR, UPDATE_SBP, UPDATE_DBP, UPDATE_PR, UPDATE_SR, stateType, actionType} from "./store-type";

export const initialState: stateType[] = [
    {
        id: 0,
        name: '',
        BP: {value:0, name: 'Blood Pressure'},
        HR: {value:0, name: 'Heart Rate'},
        SBP: {value:0, name: 'Sistolic BP'},
        DBP: {value:0 , name: 'Distolic BP'},
        PR: {value:0, name: 'Pulse Rate'},
        SR: {value:0, name: 'Sugar'},
    }
    
]

export const initialStateValue: stateType[] = [
    {
        id: 1,
        name: 'Mohit',
        BP: {value:120, name: 'Blood Pressure'},
        HR: {value:140, name: 'Heart Rate'},
        SBP: {value:200, name: 'Sistolic BP'},
        DBP: {value:100 , name: 'Distolic BP'},
        PR: {value:150, name: 'Pulse Rate'},
        SR: {value:80, name: 'Sugar'},
    },
    {
        id: 2,
        name: 'Tushar',
        BP: {value:110, name: 'Blood Pressure'},
        HR: {value:120, name: 'Heart Rate'},
        SBP: {value:250, name: 'Sistolic BP'},
        DBP: {value:150 , name: 'Distolic BP'},
        PR: {value:180, name: 'Pulse Rate'},
        SR: {value:100, name: 'Sugar'},
    }
    
]

const reducerFunction = (state= initialState , action: any) => {
 
        switch (action.type) {
            case 'SET_USER_DATA' :
                return{
                    ...action.payloard
                }
            case 'UPDATE_USER_DATA':
                console.log('state white update' , state , action);
        const userid : number = state.findIndex((user:stateType) => user.id === action.userData.id )        
        state[userid] = action.userData;  
        return   [...state];
                
                
            default:
                return state;
        }

}

export default reducerFunction;