import React from 'react'
import {Navigate, Route} from "react-router-dom"
import { useAuth } from '../context/AuthContext'
export default function PrivateRoute({component:Component, ...rest}){
    const {currentUser} = useAuth()

    return(
        <Route 
        {...rest}
        render={props=>{
            currentUser?<Component {...props} />: <Navigate to="/login"/>
                }}
        >

        </Route>
    )
}