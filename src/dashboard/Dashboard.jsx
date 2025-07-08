import {DashBody,  Conteneur } from './DashStyles'

import { Routes, Route } from 'react-router-dom';
 
import Sidebar from './Sidebar';
import Header from './Header';

import DashboardAffichage from './DashboardContenu';
import HotelContenu from './HotelContenu';
import { useState } from 'react';

const Dashboard = () => {
    const [recherche, setRecherche] = useState('')

    return ( 
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
     );
}
 
export default Dashboard;