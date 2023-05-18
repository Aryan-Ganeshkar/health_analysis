import { useContext } from "react";
import { TABLE, stateType } from "../../store/store-type";
import HealthDataContext from "../../context/HealthDataContext";
import { useParams } from "react-router-dom";

const EditHealthData = () => {

    const parms = useParams();
    console.table(parms);

    const onNameChange = (e:any) => {
        console.log('e.name' , e.target.value)
        const newUserData = {...userData , name:e.target.value};
        changeUserData(newUserData, true);
    }

    const onChangeBP = (e:any) => {
        console.log('e.name' , e.target.value)
        const newUserData = {...userData , name:e.target.value};
        changeUserData(newUserData, true);
    }
    
    const {userData , changeView, changeUserData} = useContext(HealthDataContext);
    console.log('userData' , userData)

    return(
        <div>
            <p> ID :- {userData.id} </p>
        <br />
        <button onClick={() => changeView(TABLE)}> TableView </button>
            <br />
            <br />
            <form>
                <input type="text" value={userData.name} onChange={onNameChange} placeholder="name"/>

                <span> -------------------- </span>

                <input type="number" value={userData.BP.value} onChange={onNameChange} placeholder={userData.BP.name} />
                
            </form>
        </div>
    )
}

export default EditHealthData;