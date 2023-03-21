
import React , {useState} from 'react'
import {addBook} from '../server.js';
import main from '../server.js'
function SellBooks() {
    const [user, setUser] = useState({
        phoneNumber:Number,
        bookTitle:String,
        location: String,
        price: Number,
        file: 'filepath', 
    });
    //TODO:  I need to some basic authenticaiton like phone number is 10 digits title of the book needs to be between 3 words or smt like that location is only 15 characters  and add new textarea field to specify the condition of the book
    return (
        <form onSubmit={ (e)=>{
            e.preventDefault();
            console.log(user)
            addBook(user);
            document.querySelectorAll('input').forEach((ele)=>{
                ele.value = '';
            })
        }} >

            <div class="mb-3">
                <label for="" class="form-label">Phone number *</label>
                <input type="number"
                    class="form-control form-control-lg" name="phNumber" id="phNumber" aria-describedby="helpId" placeholder="" onChange={(e)=>{setUser({...user, phoneNumber: e.target.value})}} required/>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Book Title *</label>
{                // TODO: Add an API so we can standardize the name of the book
}                <input type="text"
                    class="form-control form-control-lg" name="title" id="title" aria-describedby="helpId" placeholder="" onChange={(e)=>{setUser({...user, bookTitle: e.target.value})}} required  />
            </div>

            <div className="row">
                <div className="col-8">
                    <div class="mb-3">
                        <label for="location" class="form-label">City *</label>
{                        // TODO: Add googles cit API here
}                        <input type="text"
                            class="form-control form-control-lg" name="location" id="location" aria-describedby="helpId" placeholder="" onChange={(e)=>{setUser({...user, location: e.target.value})}} required/>
                    </div>
                </div>
                <div className="col-4">
                    <div class="mb-3">
                        <label for="price" class="form-label">Price *</label>
                        <input type="number"
                            class="form-control form-control-lg" name="price" id="price" aria-describedby="helpId" placeholder="" onChange={(e)=>{setUser({...user, price: e.target.value})}} required/>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Choose file </label>
                {// TODO: file support # priority after functionality
}

                <input type="file" class="form-control" name="" id="" placeholder="" aria-describedby="fileHelpId" onChange={(e)=>{setUser({...user, file: e.target.value})}}  />
            </div>
            <button type="Submit" class="btn btn-primary">Button</button>

        </form>
    )
}

export default SellBooks