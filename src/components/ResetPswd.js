import React from 'react'
import LoginHeader from './LoginHeader'
function ResetPswd(){
return(
<>
<LoginHeader/>
<div className="container-fluid">
   <div className="col-sm-12">
      <div className="card details col-4 mt-5">
         <div class="card credentials">
            <div className="card-header fw-bold text-start">
               Reset Password
            </div>
            <div className="card-body mt-n1">
               <div className="mb-0">
                  <label for="formGroupExampleInput" className="form-label"></label>
                  <input type="text" className="form-control rounded-pill" id="formGroupExampleInput" placeholder="New Password"/>
               </div>
               <div className="mb-3">
                  <label for="formGroupExampleInput2" className="form-label"></label>
                  <input type="text" className="form-control rounded-pill" id="formGroupExampleInput2" placeholder="Confirm Password"/>
               </div>
               <div className="mb-2">
                  <button className="loginbutton">Create New Password</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</>
);
}
export default ResetPswd;