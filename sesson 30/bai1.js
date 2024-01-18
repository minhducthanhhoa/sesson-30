function isPalindrome(arr) {
    // Kiểm tra từng phần tử của mảng
    for (let i = 0; i < arr.length / 2; i++) {
      // So sánh phần tử đầu và phần tử cuối, phần tử thứ hai và phần tử thứ hai từ cuối, và cứ tiếp tục như vậy
      if (arr[i] !== arr[arr.length - 1 - i]) {
        return false; // Nếu có phần tử nào không đối xứng, trả về false
      }
    }
    return true; // Nếu mảng đối xứng, trả về true
  }
  
  
  const array = [1, 2, 3, 2, 1];
  
  
  console.log(isPalindrome(array));