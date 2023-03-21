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


export const db = getFirestore(app);



// Adding Books
console.log('server is running');
const bookColl = collection(db, 'books')

export async function addBook(user) {

    try {
        console.log('I tried');
        await addDoc(bookColl, user);
        console.log('adbook is done');

    } catch {
        console.log('error');
    }
    console.log('Addbook in progress');
}

export async function getBooks() {
    let bookSnap = await getDocs(bookColl);
    let bookArray = []
    bookSnap.docs.forEach((ele)=>{
        bookArray.push(ele.data())
    })
    console.log(bookArray)
    return bookArray


}

// Querying Books based on fliter


//So I'll  begin by making CRUD then I can just call each function to perform these actions.