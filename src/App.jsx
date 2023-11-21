// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'   
import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Formulario from "./Components/Formulario";
import HomePage from './pages/HomePage';
import NavComponent from "./Components/NavComponent";
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import AboutUs from './pages/AboutUs';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import KidsPage from './pages/KidsPage';
import ListPage from './pages/productos/ListPage';
import ConsumoApi from './Components/ConsumoApi';
function App() {

  const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/HomePage', element: <HomePage /> },
      { path: '/Login', element: <Formulario /> },
      { path: '/ProfilePage', element: <ProfilePage /> },
      { path: '/CartPage', element: <CartPage /> },
      { path: '/AboutUs', element: <AboutUs /> },
      { path: '/SettingsPage', element: <SettingsPage /> },
      { path: '/HelpPage', element: <HelpPage /> },
      { path: '/MenPage', element: <MenPage /> },
      { path: '/WomenPage', element: <WomenPage /> },
      { path: '/KidsPage', element: <KidsPage /> },
      { path: '/ListPage', element: <ListPage /> }


    ])
    return routes
  };

  return (

    <BrowserRouter>
      <NavComponent />

      {/* <Formulario />
      <NavComponent/> */}
      <AppRoutes />


    </BrowserRouter>


  );
};

export default App
/*import './App.css'
import ButtonCom from "./Components/ButtonCom";
function App() {

  return (
    
      <div className="App">
      <ButtonCom/>
      </div>
      
    
  );
};

export default App*/