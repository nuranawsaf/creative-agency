import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import OrderForm from './components/ManageOrder/OrderForm/OrderForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/DashBoard/Dashboard/Dashboard';
import Admin from './components/Admin/Admin/Admin';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import AddService from './components/Admin/AddService/AddService';
import PostReview from './components/PostReview/PostReview';
import ServiceList from './components/ManageOrder/ServiceList/ServiceList';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <div className="app">
            <Router>
            <Switch>

              <Route path="/home">
                <Home></Home>
              </Route>

              <Route path="/login" >
                  <Login></Login>
              </Route>

              <Route path="/orderForm">
                <OrderForm></OrderForm>
              </Route>

              <Route path="/serviceList" >
              <ServiceList></ServiceList>
              </Route>

              <Route path="/postReview" >
              <PostReview></PostReview>
              </Route>

              <Route path="/admin" >
              <Admin></Admin>
              </Route>

              

              <Route path="/addService" >
              <AddService></AddService>
              </Route>

              <Route path="/makeAdmin" >
              <MakeAdmin></MakeAdmin>
              </Route>

              <PrivateRoute path="/dashboard" >
              <Dashboard></Dashboard>
              </PrivateRoute>

              <Route exact path="/" >
              <Home></Home>
              </Route>

            </Switch>
            </Router>
      </div>

    </UserContext.Provider>

    
  );
}

export default App;
