export default async function isbnLookup(isbn) {
    try {
      const response = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
      const data = await response.json();
      console.log('fetching')
  
      const bookInfo = data[`ISBN:${isbn}`];
  
      if (bookInfo) {
        alert(bookInfo.title)
        console.log(bookInfo)
        return bookInfo;
      } else {
        console.log('book doesnt exist ')
        return null;
      }
    } catch (error) {
      console.error('Error fetching book information:', error);
      return null;
    }
  }
  