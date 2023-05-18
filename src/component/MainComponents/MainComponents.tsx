import { useContext } from "react";
import HealthDataContext from "../../context/HealthDataContext";
import { EDIT, TABLE, VIEW } from "../../store/store-type";
import ShowHealthData from "../ShowHealthData/ShowHealthData";
import EditHealthData from "../EditHealthData/EditHealthData";
import ViewHealthData from "../ViewHealthData/ViewHealthData";

const MainComponents = () => {

    const healthContext = useContext(HealthDataContext);

  const {currentPageState} = healthContext;
    console.log('Main currentPageState', currentPageState);

    return(
        <div>
            {currentPageState === VIEW && <ViewHealthData />}
             {currentPageState === TABLE && <ShowHealthData />}
     {currentPageState === EDIT && <EditHealthData />} 
        </div>

    )
};

export default MainComponents;