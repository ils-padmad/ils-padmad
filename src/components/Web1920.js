import React from 'react'
import Web1920Header from './Web1920Header'
import dashboard from '../static/Images/svg/sidebar_dashboard.svg'
import gallery from '../static/Images/svg/sidebar_gallery.svg'
import gravience from '../static/Images/svg/sidebar_gravience.svg'
import report from '../static/Images/svg/sidebar_report.svg'
function AffiliateDashboard(){
return(
<>
<Web1920Header/>
<div class="container-fluid">
   <div class="row col-12">
      <div className="col-1 list-group-icons">
         <div class="list-group">
            <button type="button" class="list-group-item list-group-item-action"><img src={dashboard} alt="dashboard"/></button>
            <button type="button" class="list-group-item list-group-item-action"><img src={gallery} alt="gallery"/></button>
            <button type="button" class="list-group-item list-group-item-action"><img src={report} alt="report"/></button>
            <button type="button" class="list-group-item list-group-item-action" ><img src={gravience} alt="gravience"/></button>
         </div>
      </div>
      <div className="col-11">
         <div className="schoolhistory m-5">
            <h4 className="dashboardheading p-3 fs-5 fw-bold">Registered Users</h4>
            <table class="table circulumdata">
               <thead className="studentdetails">
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
                     <th scope="row">1</th>
                     <td>Ajit Chailari</td>
                     <td>Ajitpchailari@saravanaenergy.com<br/><span>+91 9876543210</span></td>
                     <td>Kiyashri A jain<br/><span>The Emeraid Heights internationnal School</span></td>
                     <td>PAY_HtdfgtrH,RF5D90<br/><span>Jun 11,2021,02:26:00 PM</span></td>
                     <td>Chess Master<br/><span>Batch 20,Level20</span></td>
                     <td>June2, 2021 05:00PM06:00PM<br/><span>Jul2,2021 05:00PM;06:00PM</span></td>
                  </tr>
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
                     <th scope="row">1</th>
                     <td>Ajit Chailari</td>
                     <td>Ajitpchailari@saravanaenergy.com<br/><span>+91 9876543210</span></td>
                     <td>Kiyashri A jain<br/><span>The Emeraid Heights internationnal School</span></td>
                     <td>PAY_HtdfgtrH,RF5D90<br/><span>Jun 11,2021,02:26:00 PM</span></td>
                     <td>Chess Master<br/><span>Batch 20,Level20</span></td>
                     <td>June2, 2021 05:00PM06:00PM<br/><span>Jul2,2021 05:00PM;06:00PM</span></td>
                  </tr>
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
                     <th scope="row">1</th>
                     <td>Ajit Chailari</td>
                     <td>Ajitpchailari@saravanaenergy.com<br/><span>+91 9876543210</span></td>
                     <td>Kiyashri A jain<br/><span>The Emeraid Heights internationnal School</span></td>
                     <td>PAY_HtdfgtrH,RF5D90<br/><span>Jun 11,2021,02:26:00 PM</span></td>
                     <td>Chess Master<br/><span>Batch 20,Level20</span></td>
                     <td>June2, 2021 05:00PM06:00PM<br/><span>Jul2,2021 05:00PM;06:00PM</span></td>
                  </tr>
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
                     <th scope="row">1</th>
                     <td>Ajit Chailari</td>
                     <td>Ajitpchailari@saravanaenergy.com<br/><span>+91 9876543210</span></td>
                     <td>Kiyashri A jain<br/><span>The Emeraid Heights internationnal School</span></td>
                     <td>PAY_HtdfgtrH,RF5D90<br/><span>Jun 11,2021,02:26:00 PM</span></td>
                     <td>Chess Master<br/><span>Batch 20,Level20</span></td>
                     <td>June2, 2021 05:00PM06:00PM<br/><span>Jul2,2021 05:00PM;06:00PM</span></td>
                  </tr>
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
                     <th scope="row">1</th>
                     <td>Ajit Chailari</td>
                     <td>Ajitpchailari@saravanaenergy.com<br/><span>+91 9876543210</span></td>
                     <td>Kiyashri A jain<br/><span>The Emeraid Heights internationnal School</span></td>
                     <td>PAY_HtdfgtrH,RF5D90<br/><span>Jun 11,2021,02:26:00 PM</span></td>
                     <td>Chess Master<br/><span>Batch 20,Level20</span></td>
                     <td>June2, 2021 05:00PM06:00PM<br/><span>Jul2,2021 05:00PM;06:00PM</span></td>
                  </tr>
                  <tr>
                     <th scope="row">1</th>
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
      </div>
   </div>
</div>
</>
);
}
export default AffiliateDashboard;