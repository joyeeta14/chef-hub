import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const authContext = createContext(null);

const auth = getAuth(app);

const registerWithEmail =(email, password) => {
    return  createUserWithEmailAndPassword(auth, email, password);
}
const loginWithEmail =(email, password) => {
    return  signInWithEmailAndPassword(auth, email, password);
}

const AuthProviders = ({children}) => {

    const authInfo = {registerWithEmail,loginWithEmail};
    return (
        <div>
           <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProviders;




