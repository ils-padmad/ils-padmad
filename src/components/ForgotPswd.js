import React from 'react'
import LoginHeader from './LoginHeader'
function ForgotPswd(){
return(
<>
<LoginHeader/>
<div className="container-fluid">
   <div className="col-sm-12">
      <div className="card details col-4 mt-5">
         <div class="card credentials">
            <div className="card-header fw-bold text-start">
               Forgot Password
            </div>
            <div className="card-body">
               <div className="mb-3">
                  <label for="formGroupExampleInput" className="form-label"></label>
                  <input type="text" className="form-control rounded-pill" id="formGroupExampleInput" placeholder="Email Address"/>
               </div>
               <div className="mb-4">
                  <button className="loginbutton">Recover Password</button>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="accountsignup text-center mt-4">Get Back to Login Screen
   </div>
</div>
</>
);
}
export default ForgotPswd;