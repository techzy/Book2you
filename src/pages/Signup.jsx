import React from 'react'
import { useSession } from '../Contexts/SessionContext'
// import {signupG} from '../server'

function Signup() {
  const {signupG} = useSession()
  const {user} = useSession()

  let handleSignup = () =>{
    signupG()
  }
  console.log(user)
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{height:'80vh'}}>
    <button className="btn btn-primary btn-lg" onClick={handleSignup}>Google</button>

    </div>
  )
}

export default Signup