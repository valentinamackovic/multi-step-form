function binarySearch(arr, x) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // Check if x is present at mid
    if (arr[mid] === x) return mid;

    // If x greater, ignore left half
    if (arr[mid] < x) start = mid + 1;
    // If x is smaller, ignore right half
    else end = mid - 1;
  }

  // If we reach here, then the element was not present
  return -1;
}

//usage:
// const sortedData = [...data].sort((a, b) => a - b);
// const result = binarySearch(sortedData, searchTerm);
