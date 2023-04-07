
import React , {useState} from 'react'
import { redirect,useNavigate } from 'react-router-dom';
import { useSession } from '../Contexts/SessionContext.js';
import {addBook, uploadFile} from '../server.js';

function SellBooks() {
    const {user} = useSession()
    const [book, setBook] = useState({
        userUID:user.uid,
        phoneNumber:Number,
        bookTitle:String,
        location: String,
        price: Number,
        condition:'Like New',
        file: Object, 
    });
    const navigate = useNavigate()
    function formValid(e){
            e.preventDefault();
            if(book.phoneNumber.toString().length == 10){
                if(book.bookTitle.length < 100){
                    addBook(book).then(()=>{
                        navigate('/buy')
                    });

                alert('Sucess : You will automatically redirected')

                }
                else{
                    alert('Only 99 characters allowed as letter')

                }
                
            }
            else{
                alert('Only 10 numbers allowed in phone number')
            }
            
            // navigate('/buy')

            // window.location('/')
    }


    //TODO:  I need to some basic authenticaiton like phone number is 10 digits title of the book needs to be between 3 words or smt like that location is only 15 characters  and add new textarea field to specify the condition of the book
    //TODO: Take all the form, and setBook code into its own component and just render out this without all setter Logic
    return (
        <div className="container">
            <form onSubmit={ (e)=>{formValid(e)}} >
            <div className="mb-3">
                <label htmlFor="" className="form-label">Phone number <span className='text-danger'>*</span></label>
                <input type="number"
                    className="form-control form-control-lg" name="phNumber" id="phNumber" aria-describedby="helpId" placeholder="" onChange={(e)=>{setBook({...book, phoneNumber: parseInt(e.target.value)})
                    console.log(book)}} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Book Title <span className='text-danger'>*</span></label>
{                // TODO: Add an API so we can standardize the name of the book
}                <input type="text"
                    className="form-control form-control-lg" name="title" id="title" aria-describedby="helpId" placeholder="" onChange={(e)=>{setBook({...book, bookTitle: e.target.value})}} required  />
            </div>

            <div className="row">
                <div className="col-8">
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">City <span className='text-danger'>*</span></label>
{                        // TODO: Add googles cit API here
}                        <input type="text"
                            className="form-control form-control-lg" name="location" id="location" aria-describedby="helpId" placeholder="" onChange={(e)=>{setBook({...book, location: e.target.value})}} required/>
                    </div>
                </div>
                <div className="col-4">
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price <span className='text-danger'>*</span></label>
                        <input type="number"
                            className="form-control form-control-lg" name="price" id="price" aria-describedby="helpId" placeholder="" onChange={(e)=>{setBook({...book, price: parseInt(e.target.value)})}} required/>
                    </div>
                </div>
                
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Condition <span className='text-danger'>*</span></label>
                <select className="form-select form-select-lg" name="" defaultValue={book.condition} onChange={(e)=>{setBook({...book, condition: e.target.value})
            console.log(e.target.value)}} required>
                    <option  value="Like New">Like New</option>
                    <option value="Slighty Worn">Slighty Worn</option>
                    <option value="Worn Out">Worn Out</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Choose file <span className='text-danger'>*</span></label>
                

                <input  accept="image/*" capture="environment" type="file" className="form-control form-control-lg" name="" id="" placeholder="" aria-describedby="fileHelpId" onChange={(e)=>{setBook({...book, file: e.target.files[0]})
            console.log(e.target.files)}}  required />
            </div>
            <button type="Submit" className="btn btn-primary">Submit</button>
            <br />
            <br />
            <small className='fs-6'>You will be redirected</small>

        </form>
        </div>
    )
}

export default SellBooks