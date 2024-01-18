// Hàm kiểm tra xem có thể tạo tam giác từ 3 cạnh đã cho hay không
function isTrianglePossible(side1, side2, side3) {
    return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
  }
  
  // Hàm đếm số lượng hình tam giác có thể tạo ra từ một mảng
  function countPossibleTriangles(arr) {
    let count = 0;
  
    // Duyệt qua từng phần tử trong mảng
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          // Kiểm tra xem 3 cạnh có thể tạo thành tam giác hay không
          if (isTrianglePossible(arr[i], arr[j], arr[k])) {
            count++;
          }
        }
      }
    }
  
    return count;
  }
  
  // Mảng số nguyên dương
  const numbers = [4, 6, 3, 7];
  
  // Gọi hàm đếm số lượng hình tam giác có thể tạo ra từ mảng
  const triangleCount = countPossibleTriangles(numbers);
  
  console.log("Số lượng hình tam giác có thể tạo ra: " + triangleCount);