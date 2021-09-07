import React from 'react'
import logo from '../static/Images/svg/Be360_Logo_inverse.svg'
import BE360logo from '../static/Images/png/BE360logo.png'
import bellicon from '../static/Images/png/bellicon.png'
import globe from '../static/Images/png/globe.png'
import boy from '../static/Images/png/boy.png'

function Web1920Header(){
return(
<header>
   <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-fluid pt-3">
            <a className="navbar-brand text-center" href><img src={BE360logo} alt="BE360logo"/>
              <img src={logo} alt="logo"/>
              <p className="logosubtitle text-center">The Emerald Heights International School, Indore(MP)</p>
              </a>
             <ul className="userdashboardlog"><li className="dashboard-list"><img src={globe} alt="globe"/> </li>
              <li className="dashboard-list"><img src={bellicon} alt="bellicon"/> </li>
              <li className="dashboard-list"></li><img src={boy} alt="boy"/> 
              <li className="dashboard-list">Mr.Gary Morgon</li>
              </ul>
         </div>
      </nav>
   </div>
</header>
);
}
export default Web1920Header