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
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL
} from 'firebase/storage'

// DATABASE

const db = getFirestore(app);
const storage = getStorage(app)
console.log('server is running');
const bookColl = collection(db, 'books');

// ADD BOOK



export async function addBook(user) {
    const rInt = Math.floor(1000 + Math.random() * 9000)
    const fileRef = ref(storage, `images/${user.file.name}-${rInt}-${user.file.lastModified}`);
    let urlfile;
    let downloadURL;
    let url;
    // uploadBytes(fileRef, user.file).then((e)=>{
    //     console.log(e)
    // getDownloadURL(e.ref).then((url) => {
    //   downloadURL = url;
    // });

    try {
        console.log('I tried');
        urlfile = uploadBytesResumable(fileRef, user.file)
        // urlfile.on('progress', snapshot => {
        //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //     console.log(`Upload is ${progress}% done`);
        //   });
        urlfile.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.log(error)
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(urlfile.snapshot.ref).then((downloadURL) => {
                    url = downloadURL;
                    addDoc(bookColl, {
                        ...user,
                        file: url
                    });
                });
                
            }
        );

        console.log(urlfile)
        url ? console.log(url) : console.log('no URL')
        console.log({
            ...user,
            file: url
        })

         
        //TODO: Add UPload file in here so that it works as one prmose
        return true

    } catch (err) {
        console.log(err)
        alert(err);
        return false

    }
}
// GET ALL BOOKS

export async function getBooks(user) {
    console.log(user,'coming from get books')
    try{
        let bookSnap = await getDocs(bookColl);
        let bookArray = []
        const collectionId = bookColl.id;
        console.log(bookSnap)
        if(user){
            console.log('first')
            bookSnap.docs.forEach((ele) => {
                let bookwID = ele.data()
                console.log(ele.data().userUID == user)
                console.log(ele.data().userUID)
                console.log(user)
                if(ele.data().userUID == user){
                    bookArray.push(Object.assign(bookwID,{'bookID':ele.id}))
                }
            })
        }
        else{
            console.log('last')
            bookSnap.docs.forEach((ele) => {
                let bookwID = ele.data()
                // Only if it equals the ID
                bookArray.push(Object.assign(bookwID,{'bookID':ele.id}))
            })
        }

    console.log(bookArray)
    return bookArray
    }
    catch(err){
        console.log(err)
    }


}

export async function deleteBook(bookID){
    try{
        // 
        console.log('trying ')
        console.log(bookID)
        
        let docRef = doc(db, "books", bookID)
        await deleteDoc(docRef);
        alert('Please refresh your book has been deleted : ( ')

    }
    catch(err){
        alert(err)
    }
    console.log('done')

}

// GOOGLE AUTHENTICATION