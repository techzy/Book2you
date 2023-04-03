import React, { useEffect } from 'react'
import { useLocation,Link } from 'react-router-dom'
import { useSession } from '../Contexts/SessionContext';

function Navbar() {
  const location = useLocation();
  
    const {jess} = useSession()
    console.log(jess)
  useEffect(()=>{
    console.log('I have been rendered')
  },[])
  return (
    <>
{    //TODO: make these all links instead of hrefs
}    <nav class="navbar bg-light">
  <div class="container-fluid justify-content-between">
    <a class="navbar-brand mb-0 h1" href='/'>Book2Man</a>
    <ul class="navbar-nav flex-row ">
        <li class="nav-item mx-1">
          <Link class={`btn btn-outline-primary ${location.pathname === '/buy'?'btn-primary text-white':''}`} to="/buy">Buy</Link>
        </li>
        <li class="nav-item mx-1">
          <Link class={`btn btn-outline-primary ${location.pathname === '/sell'?'btn-primary text-white':''}`} to='/sell'>Sell</Link>
        </li>
        <li class="nav-item mx-1">
          <Link class={`btn btn-outline-warning`} to='/signup'>Sign Up</Link>
        </li>
      </ul>
  </div>
  
</nav>
    
  
    </>
  )
}

export default Navbar