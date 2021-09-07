import React from 'react'
import LoginHeader from './LoginHeader'
function AffiliateDashboard(){
return(
<>
<LoginHeader/>
<div className="container-fluid">
   <div className="row m-4">
      <h4 className="dashboardheading pt-3 mb-5">Affiliate Dashboard</h4>
      <div className="card col-3 mb-3">
         <div className="row g-0">
            <div className="col-md-4 mt-4 rounded-circle">
            </div>
            <div className="col-md-8">
               <div className="card-body studentdata">
                  <h5 className="card-title fw-bold">258</h5>
                  <p className="card-text">Students Registered.</p>
               </div>
            </div>
         </div>
      </div>
      <div className="card col-3 mb-3">
         <div className="row g-0">
            <div className="col-md-4 mt-4 rounded-circle">
            </div>
            <div className="col-md-8">
               <div className="card-body studentdata">
                  <h5 className="card-title fw-bold">856</h5>
                  <p className="card-text">Times Link Visited</p>
               </div>
            </div>
         </div>
      </div>
      <div className="card col-3 mb-3">
         <div className="row g-0">
            <div className="col-md-4 mt-4 rounded-circle">
            </div>
            <div className="col-md-8">
               <div className="card-body studentdata">
                  <h5 className="card-title fw-bold">150</h5>
                  <p className="card-text">Active Students</p>
               </div>
            </div>
         </div>
      </div>
      <div className="card col-3 mb-3">
         <div className="row g-0">
            <div className="col-md-12">
               <div className="card-body studentdata">
                  <div className="input-group mb-3">
                     <h4 className="fs-4">Share Your Affiliate Link</h4>
                     <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                     <span className="input-group-text">Copy Link</span>
                  </div>
                  <p className="card-text text-start">Active Students</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="m-4 fs-6">
   <h4>Registered Users</h4>
   <table class="table table-striped">
      <thead className="detailsheading">
         <tr>
            <th scope="col">#ID</th>
            <th scope="col">Parents Name</th>
            <th scope="col">Contact Details</th>
            <th scope="col">Kid & School</th>
            <th scope="col">Transaction</th>
            <th scope="col">Program & Batch</th>
            <th scope="col">Batch Date Time</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <th scope="row">1</th>
            <td>Ajit Chailari</td>
            <td>Ajitpchailari@saravanaenergy.com<br/><span>+91 9876543210</span></td>
            <td>Kiyashri A jain<br/><span>The Emeraid Heights internationnal School</span></td>
            <td>PAY_HtdfgtrH,RF5D90<br/><span>Jun 11,2021,02:26:00 PM</span></td>
            <td>Chess Master<br/><span>Batch 20,Level20</span></td>
            <td>June2, 2021 05:00PM06:00PM<br/><span>Jul2,2021 05:00PM;06:00PM</span></td>
         </tr>
         <tr>
            <th scope="row">2</th>
            <td>Ajit Chailari</td>
            <td>Ajitpchailari@saravanaenergy.com<br/><span>+91 9876543210</span></td>
            <td>Kiyashri A jain<br/><span>The Emeraid Heights internationnal School</span></td>
            <td>PAY_HtdfgtrH,RF5D90<br/><span>Jun 11,2021,02:26:00 PM</span></td>
            <td>Chess Master<br/><span>Batch 20,Level20</span></td>
            <td>June2, 2021 05:00PM06:00PM<br/><span>Jul2,2021 05:00PM;06:00PM</span></td>
         </tr>
         <tr>
            <th scope="row">3</th>
            <td>Ajit Chailari</td>
            <td>Ajitpchailari@saravanaenergy.com<br/><span>+91 9876543210</span></td>
            <td>Kiyashri A jain<br/><span>The Emeraid Heights internationnal School</span></td>
            <td>PAY_HtdfgtrH,RF5D90<br/><span>Jun 11,2021,02:26:00 PM</span></td>
            <td>Chess Master<br/><span>Batch 20,Level20</span></td>
            <td>June2, 2021 05:00PM06:00PM<br/><span>Jul2,2021 05:00PM;06:00PM</span></td>
         </tr>
         <tr>
            <th scope="row">4</th>
            <td>Ajit Chailari</td>
            <td>Ajitpchailari@saravanaenergy.com<br/><span>+91 9876543210</span></td>
            <td>Kiyashri A jain<br/><span>The Emeraid Heights internationnal School</span></td>
            <td>PAY_HtdfgtrH,RF5D90<br/><span>Jun 11,2021,02:26:00 PM</span></td>
            <td>Chess Master<br/><span>Batch 20,Level20</span></td>
            <td>June2, 2021 05:00PM06:00PM<br/><span>Jul2,2021 05:00PM;06:00PM</span></td>
         </tr>
         <tr>
            <th scope="row">5</th>
            <td>Ajit Chailari</td>
            <td>Ajitpchailari@saravanaenergy.com<br/><span>+91 9876543210</span></td>
            <td>Kiyashri A jain<br/><span>The Emeraid Heights internationnal School</span></td>
            <td>PAY_HtdfgtrH,RF5D90<br/><span>Jun 11,2021,02:26:00 PM</span></td>
            <td>Chess Master<br/><span>Batch 20,Level20</span></td>
            <td>June2, 2021 05:00PM06:00PM<br/><span>Jul2,2021 05:00PM;06:00PM</span></td>
         </tr>
         <tr>
            <th scope="row">6</th>
            <td>Ajit Chailari</td>
            <td>Ajitpchailari@saravanaenergy.com<br/><span>+91 9876543210</span></td>
            <td>Kiyashri A jain<br/><span>The Emeraid Heights internationnal School</span></td>
            <td>PAY_HtdfgtrH,RF5D90<br/><span>Jun 11,2021,02:26:00 PM</span></td>
            <td>Chess Master<br/><span>Batch 20,Level20</span></td>
            <td>June2, 2021 05:00PM06:00PM<br/><span>Jul2,2021 05:00PM;06:00PM</span></td>
         </tr>
      </tbody>
   </table>
</div>
</>
);
}
export default AffiliateDashboard;