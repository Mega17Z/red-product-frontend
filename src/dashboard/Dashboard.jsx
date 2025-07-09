import {DashBody,  Conteneur } from './DashStyles'

import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
 
import Sidebar from './Sidebar';
import Header from './Header';

import DashboardAffichage from './DashboardContenu';
import HotelContenu from './HotelContenu';
import { useState, useEffect } from 'react';
import Passage from '../utils/passage';

const Dashboard = () => {
    const location = useLocation();
    const [recherche, setRecherche] = useState('')
    const [afficherPassage, setAfficherPassage] = useState(false);

     useEffect(() => {
    if (location.state?.afficherPassage) {
      setAfficherPassage(true);

    }
  }, [location.state]);


    return ( 
        <>
        {afficherPassage && <Passage message={location.state?.message} />}
        <DashBody>
            <Sidebar />
            <Conteneur>

                <Header setRecherche={setRecherche} />

                <Routes>
                    <Route path='/' element={<DashboardAffichage recherche={recherche} />} />
                    <Route path='/hotels' element={<HotelContenu recherche={recherche} />} />
                </Routes>
            </Conteneur>
        </DashBody>
        </>
     );
}
 
export default Dashboard;