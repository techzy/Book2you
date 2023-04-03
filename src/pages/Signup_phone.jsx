import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import {auth} from '../server'
import {  RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from 'react';


function Signup_phone() {
    const [phNumber,setphNumber] = useState()
    const [OTP,setOTP] = useState()
    const [phoneValid,setphoneValid] = useState(false)
    let phoneVer;

    // console.log(auth)
        let submitSignup =(e) => {
            //TODO: add some basci validation
            e.preventDefault()
            window.recaptchaVerifier = new RecaptchaVerifier('submitPhone', {
                'size': 'invisible',
                'callback': (response) => {
                console.log(response)
                }
              }, auth);
            signInWithPhoneNumber(auth,phNumber,window.recaptchaVerifier).then((res)=>{
                console.log('sucess')
                console.log(res)
                console.log(phNumber)
                setphoneValid(true)
                let phoneVer = res;
                

            }).catch((err)=>{
                console.log(err)
            })
        }
        function submitOTP(e){
            e.preventDefault()
            if(OTP.toString().length == 6){
                phoneVer.confirm(OTP).then((res)=>{
                    console.log(res)
                    const user = res.user;
                    console.log(user)
                }).catch((err)=>{
                    console.log(err)
                })
            }
            else{
                alert('Type in 6 digits bro')
            }
        }
//         const renderCount = useRef(0);
//         useEffect(() => {
//             renderCount.current = renderCount.current + 1;

// },[phoneValid,phNumber]);
        // console.log(auth)
        
return (
    <>
    <div className="container">
        <form onSubmit={(e)=>submitSignup(e)}>
            <div class="mb-3">
            <label for="" class="form-label">Phone number</label>
            <input type="text" onChange={(e)=>setphNumber(e.target.value)}
                class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
            </div>
            <button name="" type="submit" id="submitPhone" class="btn btn-primary" >Submit</button>
        </form>
        {phoneValid == true?<form onSubmit={(e)=>submitOTP(e)}>
            <div class="mb-3">
            <label for="" class="form-label">OTP</label>
            <input type="number" onChange={(e)=>{setOTP(e.target.value)}}
                class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
            </div>
            <button name="" type="submit" id="" class="btn btn-primary" >Submit OTP</button>
        </form>:''}
    </div>
    {/* {renderCount.current} */}

    </>
  )
}

export default Signup