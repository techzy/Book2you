// QrCodeScanner.js
import React, { useEffect, useRef } from 'react';
import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode';
import isbnLookup from '../api/isbnLookup';

const BarcodeScannerHTML = () => {
  const scanDiv = useRef(null)
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('scannervideo',{
      qrbox:{
        width:500,
        height:200
      },
      fps:20

    })

    scanner.render(success,fail)
    function success(res){
      scanner.clear()

      isbnLookup(res)
    }
    function fail(err){
    }
  })

  return (
    <>
    <div ref={scanDiv} id="scannervideo" ></div>
    </>
  );
};

export default BarcodeScannerHTML;
