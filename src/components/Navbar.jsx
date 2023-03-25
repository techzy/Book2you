import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation();
  useEffect(()=>{
    console.log('I have been rendered')
  },[])
  return (
    <>
    <nav class="navbar bg-light">
  <div class="container-fluid justify-content-between">
    <a class="navbar-brand mb-0 h1" href='/'>Book2Man</a>
    <ul class="navbar-nav flex-row ">
        <li class="nav-item mx-1">
          <a class={`btn btn-outline-primary ${location.pathname === '/buy'?'btn-primary text-white':''}`} href="/buy">Buy</a>
        </li>
        <li class="nav-item mx-1">
          <a class={`btn btn-outline-primary ${location.pathname === '/sell'?'btn-primary text-white':''}`} href='/sell'>Sell</a>
        </li>
      </ul>
  </div>
  
</nav>
    
  
    </>
  )
}

export default Navbar