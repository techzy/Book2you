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
import { getAuth } from 'firebase/auth';

const db = getFirestore(app);
const storage = getStorage(app)


  



// Adding Books
console.log('server is running');
const bookColl = collection(db, 'books')
export let auth = getAuth();

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
        let url = await getDownloadURL(urlfile.ref)
        url ? console.log(url) : console.log('false')
    console.log({
        ...user,
        file: url
    })

        await addDoc(bookColl, {
            ...user,
            file: url
        });
        //TODO: Add UPload file in here so that it works as one prmose
        return true

    } catch (err) {
        console.log(err)
        alert(err);
        return false

    }
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