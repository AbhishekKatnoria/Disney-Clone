import React from 'react'
import CTA from "../images/cta-logo-one.svg";

function Login() {
  return (
    <section>
        <div className='login-container'>
          <div className='bg-image'></div>
         <div className='cta-logo'>
          <img src={CTA}/>
          <button className='cta-button'>GET IT ALL THERE</button>
          
         </div>
        </div>
    </section>
  )
}

export default Login;