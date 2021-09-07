import React from 'react'
import Login from './components/Login'
import ForgotPswd from './components/ForgotPswd'
import ResetPswd from './components/ResetPswd'
import BlockSeatPopup from './components/BlockSeatPopup'
import AffiliateDashboard from './components/AffiliateDashboard'
// import BE360Affiliate from './components/BE360Affiliate'
import Web1920 from './components/Web1920'
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import './static/style.scss'
import './App.scss';
function App() {
return (
<Router>
   <Switch>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/ForgotPswd" component={ForgotPswd}/>
      <Route exact path="/ResetPswd" component={ResetPswd}/>
      <Route exact path="/BlockSeatPopup" component={BlockSeatPopup}/>
      <Route exact path="/AffiliateDashboard" component={AffiliateDashboard}/>
      {/* <Route exact path="/BE360Affiliate" component={BE360Affiliate}/> */}
      <Route exact path="/Web1920" component={Web1920}/>
      {/* 
      <div className="App">
         <Login/>
         */}
         {/* 
         <Forgotpswd/>
         */}
         {/* 
         <Resetpswd/>
         */}
         {/* 
      </div>
      */}
   </Switch>
</Router>
);
}
export default App;