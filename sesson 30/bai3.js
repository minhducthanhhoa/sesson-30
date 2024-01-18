// Hàm sắp xếp chuỗi
function sortStringCharacters(str) {
    let letters = []; // Mảng chứa ký tự chữ
    let numbers = []; // Mảng chứa ký tự số
    let specialChars = []; // Mảng chứa ký tự đặc biệt
  
    // Duyệt qua từng ký tự trong chuỗi
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      if (/[a-zA-Z]/.test(char)) {
        letters.push(char); // Ký tự là chữ
      } else if (/[0-9]/.test(char)) {
        numbers.push(char); // Ký tự là số
      } else {
        specialChars.push(char); // Ký tự là ký tự đặc biệt
      }
    }
  
    // Gộp các mảng theo thứ tự: chữ, số, ký tự đặc biệt
    let sortedArray = letters.concat(numbers, specialChars);
  
    return sortedArray;
  }
  
  
  const userInput = prompt("Nhập vào một chuỗi:");
  
  // Gọi hàm sắp xếp chuỗi và lưu kết quả vào một biến
  const sortedCharacters = sortStringCharacters(userInput);
  
  
  console.log(sortedCharacters);