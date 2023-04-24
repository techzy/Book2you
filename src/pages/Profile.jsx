import React ,{useState, useEffect} from 'react' 
import { useSession } from '../Contexts/SessionContext'
import { useNavigate } from 'react-router-dom';
import {getBooks} from '../server'
import BookCard from '../components/BookCard';

function Profile() {
  
    const {user, logOut} = useSession();
    const [booksState,setbooksState] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
      let books = async()=>{
        console.log(user)
      let bookArr
          try{
              // debugger
              bookArr = await getBooks(user.uid);
              setbooksState(bookArr);
              console.log(booksState)
          }
          catch{
              console.log('error')
          }
      // console.log(booksState);
      }
      books();
      console.log(booksState[0])
      console.log(booksState)
  },[])
    
  return (
    <>
      <div className="container">
          <h1>
          Welcome {user.displayName}
          </h1>
          <h3>Your books</h3>
          { 
            booksState[0] == undefined?
              <div class="d-flex justify-content-center">
                  <div class="spinner-border text-primary" role="status">
                      <span class="visually-hidden">Loading...</span>
                  </div>
                  <p>
                  Have You added any books?

                  </p>
              </div>:
              booksState.map((ele)=>{
                  return (
                  <BookCard 
                    bookID={ele.bookID} 
                    key={ele.bookID}
                    bookTitle={ele.bookTitle}
                    condition={ele.condition} 
                    file={ele.file} 
                    location={ele.location} 
                    phoneNumber={ele.phoneNumber} 
                    price={ele.price} 
                    userID={ele.userUID} 
                    allowDelete={true}
                  />
                  
                  )
                })
            }
            
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
