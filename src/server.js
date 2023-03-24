import {
    app
} from './server-config'
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    deleteDoc,
    updateDoc,
    getDoc,
    getDocs,
    docs
} from 'firebase/firestore'

import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
    uploadBytes
} from 'firebase/storage'

const db = getFirestore(app);
const storage = getStorage(app)

// Adding Books
console.log('server is running');
const bookColl = collection(db, 'books')

//  function uploadFile(file){
//     console.log(file)
//     const rInt = Math.floor(1000 + Math.random() * 9000)
//     const fileRef = ref(storage, `images/${file.name}--${file.lastModified}`);
//     let downloadURL;



//     try{


//         })
//     return downloadURL






//     }
//     catch{
//         console.log('error')
//     }
// }


export async function addBook(user) {
    console.log(user.file)
    const rInt = Math.floor(1000 + Math.random() * 9000)
    const fileRef = ref(storage, `images/${user.file.name}-${rInt}-${user.file.lastModified}`);
    let urlfile;
    let downloadURL;
    // uploadBytes(fileRef, user.file).then((e)=>{
    //     console.log(e)
    // getDownloadURL(e.ref).then((url) => {
    //   downloadURL = url;
    // });

    try {
        console.log('I tried');
        urlfile = await uploadBytesResumable(fileRef, user.file)
        console.log(urlfile)
        // urlfile.on('state_changed',
        //     (snapshot) => {
        //         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //         console.log('Upload is ' + progress + '% done');
        //         switch (snapshot.state) {
        //             case 'paused':
        //                 console.log('Upload is paused');
        //                 break;
        //             case 'running':
        //                 console.log('Upload is running');
        //                 break;
        //         }
        //     },
        //     (error) => {
        //         // A full list of error codes is available at
        //         // https://firebase.google.com/docs/storage/web/handle-errors
        //         switch (error.code) {
        //             case 'storage/unauthorized':
        //                 // User doesn't have permission to access the object
        //                 break;
        //             case 'storage/canceled':
        //                 // User canceled the upload
        //                 break;

        //                 // ...

        //             case 'storage/unknown':
        //                 // Unknown error occurred, inspect error.serverResponse
        //                 break;
        //         }
        //     },
        //     () => {
        //         // Upload completed successfully, now we can get the download URL
        //         // getDownloadURL(uploadTask.ref).then((downloadURL) => {
        //         //     console.log('File available at', downloadURL);
        //         // });
        //     }
        // );

        let url = await getDownloadURL(urlfile.ref)
        url ? console.log(url) : console.log('false')

        await addDoc(bookColl, {
            ...user,
            file: url
        });
        //TODO: Add UPload file in here so that it works as one prmose
        alert('Sucessfull')

    } catch (err) {
        console.log(err)
        alert(err);
        alert('err');

    }
    console.log('Addbook in progress');
    console.log(urlfile)
}

export async function getBooks() {
    let bookSnap = await getDocs(bookColl);
    let bookArray = []
    bookSnap.docs.forEach((ele) => {
        bookArray.push(ele.data())
    })
    console.log(bookArray)
    return bookArray


}

// Querying Books based on fliter


//So I'll  begin by making CRUD then I can just call each function to perform these actions.