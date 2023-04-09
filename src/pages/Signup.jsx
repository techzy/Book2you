import React from 'react'
import { useSession } from '../Contexts/SessionContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
// import {signupG} from '../server'

function Signup() {
  const navigate = useNavigate();
  let isInsideInAppBrowser = /(FBAN|FBAV|Twitter|Instagram|Discord)/.test(window.navigator.userAgent);
if (isInsideInAppBrowser) {
  alert('Sign up will not work please click the three dots and go to "Open in system browser" Thanks :) ');
} 


  const {signupG, user} = useSession()

  let handleSignup  =  () =>{
    signupG();
  }
  useEffect(()=>{
  //   console.log('I have been redered')
    
  
  console.log(user&& 'user exits')
  console.log(user,'This is from signup')
  user && navigate('/buy')


  })
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{height:'80vh'}}>
      <h1>Sign Up</h1>
      <button className="btn btn-primary btn-lg" onClick={handleSignup}>Google</button>
    </div>
  )
}

export default Signup