
import React , {useState} from 'react'
import { redirect,useNavigate } from 'react-router-dom';
import { useSession } from '../Contexts/SessionContext.js';
import {addBook, uploadFile} from '../server.js';

function SellBooks() {
    const {user} = useSession()
    const [book, setBook] = useState({
        phoneNumber:Number,
        bookTitle:String,
        location: String,
        price: Number,
        condition:'Like New',
        file: Object, 
        userUID:user.uid
    });
    const navigate = useNavigate()
    function formValid(e){
            e.preventDefault();
            if(book.phoneNumber.toString().length == 10){
                if(book.bookTitle.length < 100){
                    addBook(book).then(()=>{
                        navigate('/buy')
                    });
                    alert(user.uid)

                alert('Sucess : You will automatically redirected')

                }
                else{
                    alert('Only 99 characters allowed as letter')

                }
                
            }
            else{
                alert('Only 10 numbers allowed in phone number')
            }
            console.log()
            
            // navigate('/buy')

            // window.location('/')
    }


    //TODO:  I need to some basic authenticaiton like phone number is 10 digits title of the book needs to be between 3 words or smt like that location is only 15 characters  and add new textarea field to specify the condition of the book
    //TODO: Take all the form, and setBook code into its own component and just render out this without all setter Logic
    return (
        <div className="container">
            <form onSubmit={ (e)=>{formValid(e)}} >
            <div class="mb-3">
                <label for="" class="form-label">Phone number <span className='text-danger'>*</span></label>
                <input type="number"
                    class="form-control form-control-lg" name="phNumber" id="phNumber" aria-describedby="helpId" placeholder="" onChange={(e)=>{setBook({...book, phoneNumber: parseInt(e.target.value)})
                    console.log(book)}} required/>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Book Title <span className='text-danger'>*</span></label>
{                // TODO: Add an API so we can standardize the name of the book
}                <input type="text"
                    class="form-control form-control-lg" name="title" id="title" aria-describedby="helpId" placeholder="" onChange={(e)=>{setBook({...book, bookTitle: e.target.value})}} required  />
            </div>

            <div className="row">
                <div className="col-8">
                    <div class="mb-3">
                        <label for="location" class="form-label">City <span className='text-danger'>*</span></label>
{                        // TODO: Add googles cit API here
}                        <input type="text"
                            class="form-control form-control-lg" name="location" id="location" aria-describedby="helpId" placeholder="" onChange={(e)=>{setBook({...book, location: e.target.value})}} required/>
                    </div>
                </div>
                <div className="col-4">
                    <div class="mb-3">
                        <label for="price" class="form-label">Price <span className='text-danger'>*</span></label>
                        <input type="number"
                            class="form-control form-control-lg" name="price" id="price" aria-describedby="helpId" placeholder="" onChange={(e)=>{setBook({...book, price: parseInt(e.target.value)})}} required/>
                    </div>
                </div>
                
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Condition <span className='text-danger'>*</span></label>
                <select class="form-select form-select-lg" name="" defaultValue={book.condition} onChange={(e)=>{setBook({...book, condition: e.target.value})
            console.log(e.target.value)}} required>
                    <option selected value="Like New">Like New</option>
                    <option value="Slighty Worn">Slighty Worn</option>
                    <option value="Worn Out">Worn Out</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Choose file <span className='text-danger'>*</span></label>
                

                <input  accept="image/*" capture="environment" type="file" class="form-control form-control-lg" name="" id="" placeholder="" aria-describedby="fileHelpId" onChange={(e)=>{setBook({...book, file: e.target.files[0]})
            console.log(e.target.files)}}  required />
            </div>
            <button type="Submit" class="btn btn-primary">Submit</button>
            <br />
            <br />
            <small className='fs-6'>You will be redirected</small>

        </form>
        </div>
    )
}

export default SellBooks