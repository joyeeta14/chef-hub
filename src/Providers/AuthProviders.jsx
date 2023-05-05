import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


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

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(loggedInUser)=>{
            setUser(loggedInUser);
        } )
        return ()=>{
            unSubscribe();
        }
    } ,[])

    const authInfo = {registerWithEmail,loginWithEmail, user, logOut};
    return (
        <>
           <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </>
    );
};

export default AuthProviders;




