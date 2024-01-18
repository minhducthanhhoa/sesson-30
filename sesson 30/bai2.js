// Hàm kiểm tra số lẻ
function isOdd(number) {
    return number % 2 !== 0;
  }
  
  // Hàm in ra các số nguyên dương lẻ
  function printOddNumbers(n) {
    let count = 0; // Biến đếm số lượng số lẻ đã in ra
    let sum = 0; // Biến tổng các số lẻ đã in ra
  
    for (let i = 1; i <= n; i += 2) {
      // In ra số lẻ và cập nhật biến đếm và tổng
      console.log(i);
      count++;
      sum += i;
    }
  
    // Kiểm tra tổng có phải số lẻ hay không
    if (isOdd(sum)) {
      console.log("Tổng các số lẻ là số lẻ.");
    } else {
      // Nếu tổng không phải số lẻ, in ra số lẻ tiếp theo để có tổng là số lẻ
      console.log(n + 1);
      console.log("Tổng các số lẻ không là số lẻ, nên in thêm một số lẻ nữa.");
      count++;
    }
  
    console.log("Số lượng số lẻ đã in ra: " + count);
  }
  
  
  const n = parseInt(prompt("Nhập vào số nguyên dương n:"));
  
  
  printOddNumbers(n);