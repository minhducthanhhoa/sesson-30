// Hàm kiểm tra số nguyên tố
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    // Kiểm tra các số từ 2 đến căn bậc hai của number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // Nếu có ước số khác 1 và chính nó, trả về false
      }
    }
  
    return true; // Nếu không có ước số nào, trả về true
  }
  
  // Mảng các số nguyên
  const numbers = [2, 3, 7, 9, 11, 13, 15, 17, 19, 20];
  
  console.log("Các số nguyên tố trong mảng:");
  
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      console.log(numbers[i]);
    }
  }