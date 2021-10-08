import { Route, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './auth/Login';
import Sign from './auth/Sign';
import "react-toastify/dist/ReactToastify.css";
import Dasboard from './components/Dasboard';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import firebase from 'firebase';
import { Dashs } from './Dashs';
import Forgotpass from './auth/Forgotpass';






function App() {


  const disaptch = useDispatch();

  useEffect(() =>{
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user)=>{  //Here we are getting values of token and user from our login page and transferring that data to our state .
      if(user)
      {
        const token = await user.getIdTokenResult()

         disaptch({                              //here we are dispatching values to our redux state or reducers value :
          type:"LOGGED_IN",
           payload: {
            email:user.email,
            token:token,
          }
        })
      }
    })
    return () => unsubscribe();
  },[])


  return (
    <>
    <ToastContainer/>
    
    <Switch>
    <Route exact path="/" component={()=> <Sign/>}/>
    <Route exact path="/" component={()=> <Sign/>}/>
    <Route  exact path="/login" component={()=> <Login/>}/>
    {/* <Route  exact path="/dash" component={()=> <Dasboard/>}/> */}
    <Route  exact path="/dash" component={()=> <Dashs/>}/>
    <Route  exact path="/forgot-password" component={()=> <Forgotpass/>}/>
    </Switch>
  
    </>
  );
}

export default App;
