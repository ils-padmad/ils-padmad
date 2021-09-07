import React from 'react'
import LoginHeader from './LoginHeader'
function Login(){
return(
<>
<LoginHeader/>
<div className="container-fluid">
   <div className="col-sm-12">
      <div className="card details col-4 mt-5">
         <div class="card credentials">
            <div className="card-header fw-bold text-start">
               Login to Your Account
            </div>
            <div className="card-body">
               <div className="mb-3">
                  <label for="formGroupExampleInput" className="form-label"></label>
                  <input type="text" className="form-control rounded-pill" id="formGroupExampleInput" placeholder="Email Address/Username"/>
               </div>
               <div className="mb-3">
                  <label for="formGroupExampleInput2" className="form-label"></label>
                  <input type="text" className="form-control rounded-pill" id="formGroupExampleInput2" placeholder="Password"/>
               </div>
               <div className="mb-4">
                  <button className="loginbutton">LOGIN</button>
               </div>
               <div className="mb-3">
                  <div className="form-check">
                     <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                     <label className="form-check-label labeltext" for="dropdownCheck">
                     Keep me login
                     </label>
                  </div>
                  <div className="password">Forgot Password?</div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="accountsignup text-center mt-4">Create an account?
   </div>
</div>
</>
);
}
export default Login;