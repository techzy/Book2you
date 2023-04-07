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
// GET ALL BOOKS

export async function getBooks() {
    let bookSnap = await getDocs(bookColl);
    let bookArray = []
    bookSnap.docs.forEach((ele) => {
        bookArray.push(ele.data())
    })
    return bookArray


}

// GOOGLE AUTHENTICATION






