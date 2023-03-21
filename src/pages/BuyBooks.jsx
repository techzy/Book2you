import React from 'react'
import BookCard from '../components/BookCard'
export default function BuyBooks() {

    return (
        <>
            <form action="">
                <div class="mb-3">
                    <label for="" class="form-label">Title of book</label>
                    <input type="text"
                        class="form-control form-control-lg" name="title" id="title" placeholder="" />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Location</label>
                    <input type="text"
                        class="form-control form-control-lg" name="location" id="location" placeholder="" />
                </div>
                <button class="btn btn-primary" type="submit">Search</button>

            </form>

            <div className="cards">
                <BookCard />
            </div>
        </>
    )
}
