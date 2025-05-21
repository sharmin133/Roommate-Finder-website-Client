import React, { useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

import { auth } from '../../../Firebase/firebase.init';
import { AuthContext } from './AuthContext';

const googleAuthProvider= new GoogleAuthProvider();
const AuthProvider = ({children}) => {

 

    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }



    const userLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleAuthProvider)
    }

    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
             setUser(currentUser)
             setLoading(false)
        })
        return()=> {
            unsubscribe();
        }

    },[])

    const userInfo={
        user,
        loading,
       createUser,
       userLogin,
       signOutUser,
       googleSignIn,
      
    }

    return (
         <AuthContext.Provider value={userInfo}>

            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;