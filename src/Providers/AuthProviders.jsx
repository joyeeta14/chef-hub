import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';


export const authContext = createContext(null);

const AuthProviders = ({children}) => {

    const authInfo = {name: ' karin'};
    return (
        <div>
           <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProviders;




