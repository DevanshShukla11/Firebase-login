import React from 'react'
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import logo from "../react-redux.png"
import { useHistory } from 'react-router';
import { useState ,useEffect } from 'react';
import { toast } from 'react-toastify';
import { auth } from 'firebase';
import * as firebase from "firebase";
import { Link } from 'react-router-dom';


const Login = () => {
    const history = useHistory();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState(""); 

    //By the help of useEffect we are getting data of localstorage in useEffect and displaying in login input states..

     useEffect(()=> {
     setEmail(window.localStorage.getItem('emailForRegistration'))
     setPassword(window.localStorage.getItem('passwordForRegistration'))
     },[])

     
    

     const handleSubmits = async (e) => {
          e.preventDefault();

        try{
            const res = await  firebase.auth().signInWithEmailLink( email ,window.location.href); //by this method we are sending our email link  data to our firebase :  
            console.log("result" , res);
         
           if(res.user.emailVerified)
           {
               window.localStorage.removeItem('emailForRegistration');  //Deleteing local storage after successfully logged in.
               window.localStorage.removeItem('passwordForRegistration');
               let user = firebase.auth().currentUser  //For get user data even after deleting local storage since it is a method in firebase.
               const token = await user.getIdTokenResult() //Generating token for redux .
               console.log("user" , user , "token" , token);
               history.push("/dash");
               toast.success("Login successfull welcome ! ");
           }
        }
           catch(err)
           {
               console.log(err);
               toast.error(err.message);
           }  
     }

    return (
       <>
      <div className="main-comp">
           <div className="logo">
               <img src={logo}/>
           </div>


           <div className="log-form">
               <div className="logss">
               <form  autoComplete="off"
                onSubmit={handleSubmits}>
                <span className="log">Log in</span>
               
               
               
                <div className="form">
                <EmailIcon className="account"/> 
                <input type="email" 
                 id="email"
                 name="email"
                 value={email}
                 disabled
                 placeholder="Enter your email"/>
               
                </div>


                <div className="form">
                <LockIcon className="account"/> 
                <input type="password"
                 disabled
                 id="password"
                 value={password} 
                 onChange={(e)=> setPassword(e.target.value)} 
                 placeholder="Enter your password"/>
                </div>
               
               
               
                <div className="sign">
                <button
                className="button"
                type="submit">Log in</button>
                
                
                </div>
                 
                <Link className="forgot" to="/forgot-password">Forgot-password  ?</Link>
                
                
            </form>
               
        </div>

             
              
    </div>
        <div className="bottom-sec">
        <span className="term">Terms of use &emsp; compilance &emsp; Support &emsp; Contacts </span>
        <br/>
        <span className="terms">@2019 aisme all rights reserved ..</span>
        </div>
    </div>


       </>
    )
}

export default Login
