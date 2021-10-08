import React from 'react'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'

const Dasboard = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        firebase.auth().signOut() //This is an predefined function in firebase sign out the data.
        dispatch({                //here we are dispatching data to our redux state null as we signout where type is LOGGED_OUT .
          type:"LOGGED_OUT",
          payload:null,  
        })
        toast.success("logged out successfully")
        history.push("/")
    }
    return (
        <>
        <div className="main-dash">
        <button 
        className="b"
        onClick={logout}>logout</button>
        </div>

        
        </>
    )
}

export default Dasboard
