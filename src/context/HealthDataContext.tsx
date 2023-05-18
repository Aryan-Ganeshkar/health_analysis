import { createContext, useReducer, useState } from 'react';
import styless from './HealthDataContex.module.scss'
import { TABLE, VIEW_MODE, stateType } from '../store/store-type';
import reducerFunction, { initialStateValue } from '../store/Reducer-store';
import { initalState } from '../store/store-types';


const HealthDataContext = createContext({
    users: initalState,
    currentPageState : TABLE,
    userData : initalState[0],
    changeView : (value:VIEW_MODE) => { },
    changeUserData : (userData: stateType, changeState : boolean) => {}
});

const ReducerFunc = (state=initalState , action:any ) => {
    switch (action.type) {
        case 'value':
            
            break;
    
        default:
            break;
    }
}


export const HealthDataContextWrapper:React.FC<any> = (props) => {
  
    const [state , dispatch] = useReducer(reducerFunction , initialStateValue);

    const [currentPageState , setCurrentPageState] = useState<VIEW_MODE>(TABLE);

    const changeView = (value : VIEW_MODE ) => {
        setCurrentPageState(value)
    }
    
    const [userData , setUserData] = useState<stateType>(initalState[0]);

    const changeUserData = (userData: stateType , changeState= false) => {
        setUserData(userData)
        if(changeState){
            const action = {
                type : 'UPDATE_USER_DATA',
                userData
            }
            dispatch(action)
        }
        }


    const {children} = props;

    return(
        <HealthDataContext.Provider value= {
            {
                users:state,
                currentPageState:currentPageState,
                changeView:changeView,
                userData:userData,
                changeUserData:changeUserData            
            }
        }>

      <div className={styless['container-main']}>
            {children}
        </div>
        </HealthDataContext.Provider>
       
    )
           
}


export default HealthDataContext;