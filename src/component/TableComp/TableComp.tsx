import { useContext } from "react";
import HealthDataContext from "../../context/HealthDataContext";
import styless from './TableComp.module.scss';
import { EDIT, VIEW, stateType } from "../../store/store-type";
import { Link, useNavigate } from "react-router-dom";

const TableComp = () => {

    const navigate = useNavigate();

    const {users , changeView , changeUserData} = useContext(HealthDataContext);
        console.log('healthContext users' , users) ;

    const onEdit = (userData : stateType) => {
      console.log('userData edit', userData);
      changeView(EDIT);
      navigate(`/edit/${userData.id}`)
      changeUserData(userData , true)
    } 

    const onView = (userData : stateType) => {
      console.table(userData);
      changeView(VIEW);
      navigate('/View')
    } 

      
    const tBodyRow = users.map(users => {
      return  <tr className={styless['tr']} key = {users.id}>
      <td className={styless['td']}> {users.id} </td>
      <td className={styless['td']}> {users.name} </td>
      <td className={styless['td']}> {users.BP.value}</td>
      <td className={styless['td']}>  {users.HR.value}</td>
      <td className={styless['td']}>  {users.SBP.value} </td>
      <td className={styless['td']}>  {users.DBP.value}</td>
      <td className={styless['td']}>  {users.PR.value}</td>
      <td className={styless['td']}> {users.SR.value}  </td>
      <td className={styless['td']}> 
      
         <button onClick={ () => onEdit(users)}> EDIT </button>
      </td>
      <td className={styless['td']}> 
        <button onClick={ () => onView(users)}> VIEW </button>
       </td>
    </tr>
    })   
    return(
        <table className={styless['table']}>
       <thead>
       <tr className={styless['tr']}>
          <th className={styless['th']}>Sr No</th>
          <th className={styless['th']}> Name </th>
          <th className={styless['th']}> BP </th>
          <th className={styless['th']}> HR </th>
          <th className={styless['th']}> SBP </th>
          <th className={styless['th']}> DBP</th>
          <th className={styless['th']}> PR </th>
          <th className={styless['th']}> SR </th>
          <th className={styless['th']}> EDIT </th>
          <th className={styless['th']}> VIEW </th>
        </tr>
       </thead>
       <tbody>
          {tBodyRow}
       </tbody>

      </table>
      
    )
}

export default TableComp;