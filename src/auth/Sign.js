import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { auth } from '../../src/Firebase';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import logo from "../react-redux.png"
import EmailIcon from '@material-ui/icons/Email';



const Sign = () => {
    const [user , setUser] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");


    const handleSubmit = async (e) => {
      e.preventDefault()

     //Validations on input states: 

      if(!user || !email || !password)
      {
          return toast.warning("please fill in all fields")
      }
      if(user.length>8)
      {
          return toast.error("user length must be not more than 8 digits")
      }
      if(password.length<5)
      {
          return toast.error("password length must be minimum 6 digits")
      }
      
    //here in config defines where our roue will go after google authenticaion :

      const config = {
          url: 'http://localhost:3000/login', //Route address..
          handleCodeInApp:true,
      }
      await auth.sendSignInLinkToEmail(email , config) //Method to send link in gmail.
      toast.success(`email sended successfully to ${email}`)

  


    //Allocating local storage adding data of states to local storage.

    window.localStorage.setItem('emailForRegistration' , email)
    window.localStorage.setItem('userForRegistration' , user)
    window.localStorage.setItem('passwordForRegistration' , password)
    setEmail("");
    setUser("");
    setPassword("");
    }
    

    return (
       <>
           
      <div className="main-comp">
           <div className="logo">
               <img src={logo}/>
           </div>


           <div className="log-form">
               <div className="logs">
               <form  autoComplete="off"
                onSubmit={handleSubmit}>
                <span className="log">Sign in </span>
                <div className="form">
                <AccountCircleIcon className="account"/> 
                <input type="text" 
                 id="user"
                 name="user"
                 value={user}
                 onChange={(e)=> setUser(e.target.value)}
                 autoFocus
                 placeholder="Enter your user name "/>
               
                </div>
               
               
                <div className="form">
                <EmailIcon className="account"/>
                <input type="email" 
                 id="email"
                 name="email"
                 value={email} 
                 onChange={(e)=> setEmail(e.target.value)}
                 placeholder="Enter your email"/>
                </div>


                <div className="form">
                <LockIcon className="account"/> 
                <input type="password"
                 id="password"
                 name="password" 
                 value={password}  
                 onChange={(e)=> setPassword(e.target.value)}
                 placeholder="Enter your password"/>
                </div>
               
               
               
                <div className="sign">
                <button
                className="button"
                type="submit">Sign in</button>
                </div>

               
                
                
            </form>
               
        </div>

             
              
    </div>
        <div className="bottom-sec">
        <span className="term">Terms of use &emsp; compilance &emsp; Support &emsp; Contacts </span>
        <br/>
        <span className="terms">@2021 Ds all rights reserved ..</span>
        </div>
    </div>


       </>
    )
}

export default Sign
