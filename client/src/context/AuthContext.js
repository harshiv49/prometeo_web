import React, { useContext, useEffect, useState } from 'react'
import {auth} from "../Firebase";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setcurrentUser] = useState();
    const [loading, setloading] = useState(true)
    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    function logOut(){
        auth.signOut();
    }
    useEffect(() => {
      const unsuscribe = auth.onAuthStateChanged(user=>{
        setcurrentUser(user)
        setloading(false)
      })
      return unsuscribe
    }, [])
    
  
    const value = {
        currentUser,
        signup,
        login,
        logOut
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading &&  children}
        </AuthContext.Provider>
    )
}