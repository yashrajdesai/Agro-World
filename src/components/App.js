import React, { useEffect, useState }  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Payment from './Payment';
import Login from './Login';
import Register from './Register';
import Orders from './Orders';
import Statistics from './Statistics';
import Sell from './Sell';
import CerealsAndPulses from './CerealsAndPulses';
import Vegetables from './Vegetables';
import Fruits from './Fruits';
import NavbarComponent from './NavbarComponent';
import Footer from './Footer';
import { auth,db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Loader from "./Loader"

function App() {

  const [{}, dispatch] = useStateValue();

  const [loader,setLoader]=useState(false);

  useEffect(() => {
    // will only run once when the app component loads...

    setLoader(true);
    setTimeout(()=>{
       setLoader(false);
    },4000)

    auth.onAuthStateChanged(async(authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        const user = await db.collection('users').doc(authUser.uid).get();
        // console.log(user.data().id);
        dispatch({
          type:"SET_USER",
          user:user.data()
        });
        dispatch({
          type: "SET_USER_ID",
          userId: authUser.uid,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return ( 
    
      
      <div>
      {
        loader ? <Loader/> :
        <Router >
        <NavbarComponent />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/sell">
              <Sell />
            </Route>
            <Route path="/CerealsAndPulses">
              <CerealsAndPulses />
            </Route>
            <Route path="/vegetables">
              <Vegetables />
            </Route>
            <Route path="/fruits">
              <Fruits />
            </Route>
          </Switch>
        </Router>
      }
      </div>
  );
}

export default App
