import React, { useState } from 'react'
import { useHistory } from 'react-router'
import EmailIcon from '@material-ui/icons/Email';
import firebase from 'firebase';
import { toast } from 'react-toastify';
import logo from "../react-redux.png"


const Forgotpass = () => {
    const [email , setEmail] = useState();
    const history = useHistory();

    const handleSubmit = async  (e) => {
        e.preventDefault()

        const config = {
            url: 'http://localhost:3000/', //Route address..
            handleCodeInApp:true,
        }

     await firebase.auth().sendPasswordResetEmail(email,config)
     .then(() => {
        toast.success("Set your email for password ")
         setEmail("");
     })
     .catch((error) => 
     {
      toast.error(error.message);
     })
    }
    return (
       <>

            <div className="logo">
               <img src={logo}/>
           </div>

       
       <div className="log-form">
               <div className="logsss">
               <form  autoComplete="off"
                onSubmit={handleSubmit}>
                <span className="log">Forgot-password ?</span>
       
                <div className="form">
                <EmailIcon className="account"/> 
                <input type="email"
                 id="email"
                 name="email" 
                 value={email}  
                 onChange={(e)=> setEmail(e.target.value)}
                 placeholder="Enter your email"/>
                
                </div>


                 
                <div className="sign">
                <button
                className="button"
                type="submit"
                disabled={!email}>Send</button>
                </div>

                </form>
                </div>
                </div>

                <div className="bottom-sec">
                <span className="term">Terms of use &emsp; compilance &emsp; Support &emsp; Contacts </span>
                <br/>
                <span className="terms">@2021 Ds all rights reserved ..</span>
                </div>
       </>
    )
}

export default Forgotpass;
