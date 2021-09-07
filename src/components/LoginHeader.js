import React from 'react'
import logo from '../static/Images/svg/Be360_Logo_inverse.svg'
function LoginHeader(){
return(
<header>
   <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-fluid">
            <a className="navbar-brand logo" href><img src={logo} alt="logo"/></a>
         </div>
      </nav>
   </div>
</header>
);
}
export default LoginHeader