// Hàm tìm mảng gồm 3 phần tử có tổng bằng một số cho trước
function findTriplets(arr, targetSum) {
    const n = arr.length;
  
    // Sắp xếp mảng theo thứ tự tăng dần
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;
  
      while (left < right) {
        const currentSum = arr[i] + arr[left] + arr[right];
  
        if (currentSum === targetSum) {
          return [arr[i], arr[left], arr[right]];
        } else if (currentSum < targetSum) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    // Trả về mảng rỗng nếu không tìm thấy
    return [];
  }
  
  // Mảng số nguyên
  const numbers = [4, 6, 3, 7, 9, 10, 8];
  // Số nguyên
  const targetNumber = 20;
  
  // Gọi hàm tìm mảng gồm 3 phần tử có tổng bằng số truyền vào
  const result = findTriplets(numbers, targetNumber);
  

  console.log("Mảng gồm 3 phần tử có tổng bằng " + targetNumber + ":");
  console.log(result);