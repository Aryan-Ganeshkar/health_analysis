import React, { useContext } from 'react';
import './App.css';
import ShowHealthData from './component/ShowHealthData/ShowHealthData';
import HealthDataContext, { HealthDataContextWrapper } from './context/HealthDataContext';
import EditHealthData from './component/EditHealthData/EditHealthData';
import { EDIT, VIEW } from './store/store-type';
import MainComponents from './component/MainComponents/MainComponents';


import { createBrowserRouter , RouterProvider} from "react-router-dom";
import HomePage from './component/HomePage/HomePage';
import Header from './Header/Header';
import RootComp from './RootComp/RootComp';

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootComp />,
    children: [
      {
        path:'/',
        element:<HomePage />
      },
      {
        path:'/main',
        element:<MainComponents />
      },
      {
        path:'/edit/:userid',
        element:<EditHealthData />
      }
    ]
  },
  
])

function App() {

  const healthContext = useContext(HealthDataContext);

  const {currentPageState} = healthContext;
    console.log('App currentPageState', currentPageState);
  return (
      <HealthDataContextWrapper>
        <RouterProvider router={router} />
          {/* <MainComponents /> */}
      </HealthDataContextWrapper>
  );
}

export default App;
