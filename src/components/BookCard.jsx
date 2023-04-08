import React from 'react'

function BookCard(prop) {
    console.log(prop)
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-4">
                    <img src={prop.book.file} className="img-fluid rounded-start w-100 objc-h100" alt="..." />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{prop.book.bookTitle}</h5>
                        <p className="card-text fw-bold"> ${prop.book.price}</p>
                        <a href={`tel:${prop.book.phoneNumber}`} className="card-text"> {prop.book.phoneNumber}</a>
                        <p className="card-text fw-bold"> {prop.book.location}</p>
                        <p className="card-text fw-bold">Condition: {prop.book.condition}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard