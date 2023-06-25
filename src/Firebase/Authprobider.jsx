/* eslint-disable react/prop-types */
import {createContext,useEffect,useState} from 'react';
import { getAuth, onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

import Swal from 'sweetalert2'

// import axios from 'axios';
import app from './firebase.config';
import axios from 'axios';


export const AuthContext = createContext()
const Authprobider = ({children}) => {
   const provider = new GoogleAuthProvider();
   const auth = getAuth(app)
    const [user,setuser] = useState(null)
    const [loader,setloader] = useState(true)

    const signIn = (email, password)=>{
       setloader(true)
       return createUserWithEmailAndPassword(auth,email, password)
    }


    const LoginIn = (email,password)=>{
       setloader(true)
       return signInWithEmailAndPassword(auth,email,password)

    }
    const googleLogin =()=>{
       setloader(true)
       return signInWithPopup(auth, provider)
    }
 
    
    useEffect(()=>{
          const unSubcribe =onAuthStateChanged(auth, (user) => {
            
             setuser(user)
            //  setloader(false);


             if(user){
               axios.post(`${import.meta.env.VITE_URL}/jwt` ,{
                 email:user.email
               }).then(data =>{
                 
                 console.log(data.data.token);
                 localStorage.setItem("accesstoken",data.data.token)
                 setloader(false);
               })
              }
              else{
               localStorage.removeItem("accesstoken");
              }
});
          return ()=>{
           return  unSubcribe()
          }
    },[auth])

    const logOut = ()=>{
      setloader(true)
     return signOut(auth).then(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Log out ',
        showConfirmButton: false,
        timer: 1500
      })
        
       }).catch((error) => {
         // An error happened.
         console.log(error)
       });
       
    }
      
    
   const userInfo = {
    user,
    loader,
    signIn,
    LoginIn,
    logOut,
    googleLogin
   }
    return (
       <AuthContext.Provider value={userInfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default Authprobider;