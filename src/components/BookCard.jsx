import React from 'react'

function BookCard(prop ) {
    
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-4">
                    <img src="https://picsum.photos/200/300" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{prop.book.bookTitle}</h5>
                        <p className="card-text fw-bold"> ${prop.book.price}</p>
                        <a href={`tel:${prop.book.phoneNumber}`} className="card-text"> {prop.book.phoneNumber} Call Now </a>
                        <p className="card-text fw-bold"> {prop.book.location}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard