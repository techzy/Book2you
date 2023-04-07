import React, { useEffect } from 'react'
import { useLocation,Link } from 'react-router-dom'
import { useSession } from '../Contexts/SessionContext';

function Navbar() {
  const location = useLocation();
  
    const {user, logOut} = useSession()

  return (
    <>
{    //TODO: make these all links instead of hrefs
}    <nav className="navbar bg-light">
  <div className="container-fluid justify-content-between">
    <a className="navbar-brand mb-0 h1" href='/'>Book2Man</a>
    <ul className="navbar-nav flex-row ">
        <li className="nav-item mx-1">
          <Link className={`btn btn-outline-primary ${location.pathname === '/buy'?'btn-primary text-white':''}`} to="/buy">Buy</Link>
        </li>
        <li className="nav-item mx-1">
          
            <Link className={`btn btn-outline-primary ${location.pathname === '/sell'?'btn-primary text-white':''}`} to={ user !==undefined?'/sell':'/signup'}>Sell</Link> 
          
          
        </li>
        <li className="nav-item mx-1">
          {user ==undefined?<Link className={`btn btn-outline-warning`} to='/signup'>Sign Up</Link>:<Link className={`btn btn-outline-warning`} to='/profile' >Profile</Link>}
          {
          console.log(user !==undefined)}
          {console.log(user)
          }
        </li>
      </ul>
  </div>
  
</nav>
    
  
    </>
  )
}

export default Navbar