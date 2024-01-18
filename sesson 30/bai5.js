// Hàm chuyển đổi ký tự cuối của mỗi từ thành chữ hoa
function capitalizeLastCharacter(str) {
    // Tách chuỗi thành các từ riêng biệt
    const words = str.split(" ");
  
    // Duyệt qua từng từ và chuyển đổi ký tự cuối thành chữ hoa
    const capitalizedWords = words.map((word) => {
      const lastChar = word.charAt(word.length - 1);
      const capitalizedLastChar = lastChar.toUpperCase();
      return word.slice(0, -1) + capitalizedLastChar;
    });
  
    // Gộp các từ lại thành chuỗi mới
    const result = capitalizedWords.join(" ");
  
    return result;
  }
  
  
  const userInput = prompt("Nhập vào một chuỗi:");
  
  // Gọi hàm chuyển đổi ký tự cuối thành chữ hoa và lưu kết quả vào một biến
  const modifiedString = capitalizeLastCharacter(userInput);
  
  
  console.log(modifiedString);