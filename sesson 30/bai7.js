// Hàm tìm mảng con nhỏ nhất có tổng lớn hơn một số cho trước
function findSmallestSubarray(arr, targetSum) {
    let minLength = Infinity;
    let start = 0;
    let end = 0;
    let currentSum = 0;
  
    while (end < arr.length) {
      // Tăng currentSum bằng giá trị của phần tử hiện tại
      currentSum += arr[end];
  
      // Kiểm tra nếu currentSum lớn hơn hoặc bằng targetSum
      while (currentSum >= targetSum) {
        // Cập nhật độ dài mảng con nhỏ nhất
        minLength = Math.min(minLength, end - start + 1);
  
        // Giảm currentSum bằng giá trị của phần tử đầu tiên trong mảng con
        currentSum -= arr[start];
        start++;
      }
  
      end++;
    }
  
    // Trả về mảng con nhỏ nhất nếu tồn tại, ngược lại trả về mảng rỗng
    if (minLength !== Infinity) {
      return arr.slice(start - 1, start - 1 + minLength);
    } else {
      return [];
    }
  }
  
  // Mảng số nguyên
  const numbers = [4, 6, 3, 7, 9, 10, 8];
  // Số nguyên
  const targetNumber = 20;
  
  // Gọi hàm tìm mảng con nhỏ nhất có tổng lớn hơn số truyền vào
  const smallestSubarray = findSmallestSubarray(numbers, targetNumber);
  
  
  console.log("Mảng con nhỏ nhất có tổng lớn hơn " + targetNumber + ":");
  console.log(smallestSubarray);