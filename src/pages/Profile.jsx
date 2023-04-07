import React from 'react' 
import { useSession } from '../Contexts/SessionContext'
import { useNavigate } from 'react-router-dom';

function Profile() {
  
    const {user, logOut} = useSession();
    const navigate = useNavigate()
  return (
    <>
    <div className="container">
    <h1>
    Welcome {user.displayName}
    </h1>
    <p>Feature to delte books is coming soon</p>
    <p>Feature to to update books is coming soon</p>
    <button className="btn btn-danger" onClick={()=>{
      logOut()
      navigate('/buy')
      }}>Log out</button>
    </div>
    </>
  )
}

export default Profile
