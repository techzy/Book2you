import React,{useState} from 'react'
import {deleteBook} from '../server'
function BookCard({bookTitle,condition,file,location,phoneNumber,price,bookID,userID,allowDelete,}) {
    const [deleteLoading, setDeleteLoading] = useState()
    console.log(bookID,userID)
    function handleDelete(){
        console.log(bookID)
        deleteBook(bookID);
    }
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-4">
                    <img src={file} className="img-fluid rounded-start w-100 objc-h100" alt="..." />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{bookTitle}</h5>
                        <p className="card-text fw-bold"> ${price}</p>
                       {phoneNumber && <a href={`tel:${phoneNumber}`} className="card-text"> {phoneNumber}</a> } 
                        <p className="card-text fw-bold"> {location}</p>
                        <p className="card-text fw-bold">Condition: {condition}</p>
                        {allowDelete?<div className="btn btn-danger" onClick={handleDelete}>delete</div>:''}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default BookCard