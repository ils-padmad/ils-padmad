import React from 'react'
function BlockSeatPopup(){
return(
<>
<div className="container-fluid">
   <div className="col-sm-12">
      <div className="card details col-4 mt-5">
         <div className="card credentials">
         <div className="alert alert-dismissible fade show card-header" role="alert">
  <strong>Co-branding</strong> 
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
            <div className="card-body">
               <div className="mb-3">
                  <label for="formGroupExampleInput2" className="form-label"></label>
                  <input type="text" className="form-control rounded-pill" id="formGroupExampleInput2" placeholder="Enter School Name Here"/>
               </div>
               <div className="mb-3 mt-5">
                  <div className="cancelbtn">
                  <button type="button" className="btn cancelchanges rounded-pill fw-bold">CANCEL</button>
                  </div>
                  <div className="password"><button type="button" className="btn btn-lg changesavetab rounded-pill">SAVE CHANGES</button></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</>
);
}
export default BlockSeatPopup;