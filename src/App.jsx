import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Inscription from './authentification/Inscription'
import PasseOublier from './authentification/PasseOublier'
import Connexion from './authentification/Connexion'
import Dashboard from './dashboard/Dashboard';
import NouveauHotel from './dashboard/NouveauHotel';
import Protected from './ProtectRoute';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/connexion" />} />
          <Route path='/connexion' element={<Connexion />} />
          <Route path='/inscription' element={<Inscription />} />
          <Route path='/passe-oublier' element={<PasseOublier />} />

          <Route path='/principal/*' element={
          <Protected>
            <Dashboard />
          </Protected>
           }
           />
           
          <Route path='/creer' element={
          <Protected>
            <NouveauHotel />
          </Protected>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App
