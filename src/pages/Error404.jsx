import React from 'react'
import { useSession } from '../Contexts/SessionContext'

export default function Error404({children}) {
    let {user}  = useSession()
    //  console.log(user.displayName)
    console.log('I am error')
  return (
    <>
    
    {
        user != undefined? children : <h1>Waiting for sign in....</h1>
    
    }
    </>
  )
}
