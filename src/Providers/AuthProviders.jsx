import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


export const authContext = createContext(null);

const auth = getAuth(app);

const loginWithEmail =(email, password) => {
    return  signInWithEmailAndPassword(auth, email, password);
}

const AuthProviders = ({children}) => {
    const [user, setUser]= useState('');
    
    const registerWithEmail =(email, password) => {
        return  createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(loggedInUser)=>{
            setUser(loggedInUser);
        } )
        return ()=>{
            unSubscribe();
        }
    } ,[])

    const authInfo = {registerWithEmail,loginWithEmail, user};
    return (
        <div>
           <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProviders;




