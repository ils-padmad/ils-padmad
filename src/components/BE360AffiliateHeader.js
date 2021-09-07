import React from 'react'
import logo from '../static/Images/svg/Be360_Logo_inverse.svg'
function BE360AffiliateHeader(){
return(
<header>
   <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-fluid">
            <a className="navbar-brand logo" href><img src={logo} alt="logo"/>
            <h5>The Emerald Heights International School, Indore(MP)</h5>
            </a>
         </div>
      </nav>
   </div>
</header>
);
}
export default BE360AffiliateHeader