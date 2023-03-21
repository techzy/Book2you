import React from 'react'

function BookCard() {
    return (
        <div class="card mb-3" >
            <div class="row g-0">
                <div class="col-4">
                    <img src="https://picsum.photos/200/300" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">Stoner</h5>
                        <p className="card-text fw-bold"> 93USD</p>
                        <a href='tel:780-915-9731' class="card-text"> 780 915 9731</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard