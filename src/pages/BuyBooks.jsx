import React, { useEffect, useState } from 'react'
import {getBooks} from '../server'
import BookCard from '../components/BookCard'
export default function BuyBooks() {
    const [booksState,setbooksState] = useState([])
    const [searchlocation, setsearchLocation] = useState()
    const [searchTitle, setsearchTitle] = useState()
    useEffect(()=>{
        let books = async()=>{
        let bookArr

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

                {/* <div className="container-fluid bg-light">
                    <div className="container py-3 ">
                        <div class="mb-3">
                        <label for="" class="form-label ">Title</label>
                        <input type="text"
                            class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">City</label>
                            <select class="form-select form-select-lg" name="" id="">
                                <option selected>All</option>
                                <option value="">New Delhi</option>
                                <option value="">Istanbul</option>
                                <option value="">Jakarta</option>
                            </select>
                        </div>
                    </div>
                </div> */}
                <div className="container pt-3">
                    
                    {
                    
                        
                        booksState[0] === ''?'Books are loading...':booksState.map(ele => {
                        <BookCard book={ele} key={ele.userUID} />
                    })


                        
                        
                    }
                    { 
                        booksState[0] === undefined?'No books yet :(':''
                    }
                    
                </div>
        </>
    )
}
