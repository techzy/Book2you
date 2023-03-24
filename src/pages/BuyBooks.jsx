import React, { useEffect, useState } from 'react'
import {getBooks} from '../server'
import BookCard from '../components/BookCard'
export default function BuyBooks() {
    const [booksState,setbooksState] = useState([])
    let bookArr
    console.log(booksState)
    useEffect(()=>{
        let books = async()=>{
            try{
                // debugger
                bookArr = await getBooks();
                setbooksState(bookArr);
            }
            catch{
                console.log('error')
            }
        // console.log(booksState);

        }
        books();
        console.log(booksState[0])
    },[])
    return (
        <>
            {/* <form action="">
                <div class="mb-3">
                    <label for="" class="form-label">Title of book</label>
                    <input type="text"
                        class="form-control form-control-lg" name="title" id="title" placeholder="" />
                </div>
                // {booksState[0]}
                <div class="mb-3">
                    <label for="" class="form-label">Location</label>
                    <input type="text"
                        class="form-control form-control-lg" name="location" id="location" placeholder="" />
                </div>
                <button class="btn btn-primary" type="submit">Search</button>

            </form> */}

            <div className="container">
                {
                   
                    
                    booksState[0] == ''?'Books are loading...':booksState.map(ele => <BookCard book={ele}/>)


                    
                    
                }
                { 
                    booksState[0] == undefined?'No books yet :(':''
                }
                
            </div>
        </>
    )
}
