export default function isValidISBN(isbn) {
    isbn = isbn.replace(/-/g, ''); // Remove dashes
  
    if (isbn.length === 10) {
      let sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += (i + 1) * parseInt(isbn[i]);
      }
      const checkDigit = isbn[9] === 'X' ? 10 : parseInt(isbn[9]);
      sum += 10 * checkDigit;
  
      return sum % 11 === 0;
    } else if (isbn.length === 13) {
      let sum = 0;
      for (let i = 0; i < 13; i++) {
        const weight = i % 2 === 0 ? 1 : 3;
        sum += parseInt(isbn[i]) * weight;
      }
  
      return sum % 10 === 0;
    }
  
    return false;
  }