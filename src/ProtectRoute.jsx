import React from 'react'
import { Navigate } from "react-router-dom"

const Protected = ({children}) => {
    const token = localStorage.getItem('token')

    return token ? children : <Navigate to="/connexion" />
}

export default Protected