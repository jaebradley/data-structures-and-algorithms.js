/**
 * Choose last element as pivot
 * Two pointers - one represents the last element smaller than the pivot and one represents the last element greater than the pivot
 * The first pointer starts at the index before the start index and the second pointer starts at the start index
 * While the second pointer increments, if it's value is less than the pivot, the first pointer also increments, and the two pointers swap values
 * If all previous values have been less than the pivot, the swap doesn't really matter (since all previous values have been less than the pivot)
 * But if some previous values have been greater than the pivot, then the first pointer wouldn't have incremented but the second would have
 * So the first pointer value would represent the last index where a value was less than the pivot...but incrementing the first index would now
 * mean it represented the first index where a value was greater than the pivot.
 * So then subsequently swapping the first and second index would swap the first index where a value was greater than the pivot with a value less than the pivot
 * Once the for loop has completed, swap the first index + 1 value (the first value greater than the pivot) with the pivot
 * Return the pivot.
 * Recursively sort from start to pivot index - 1 and pivot index + 1 to end index
 * Runtime: Worst-case (for sorted lists) is O(n^2). Average runtime is O(n * log n)
 */

function quicksort(values) {
  if (values) {
    return partitionedQuickSort(values, 0, values.length - 1);
  }

  return values;
}

function swap(values, firstIndex, secondIndex) {
  var firstValue = values[firstIndex];
  values[firstIndex] = values[secondIndex];
  values[secondIndex] = firstValue;
}

function partitionedQuickSort(values, startIndex, endIndex) {
  if (startIndex < endIndex) {
    var partitionIndex = partition(values, startIndex, endIndex);

    partitionedQuickSort(values, startIndex, partitionIndex - 1);
    partitionedQuickSort(values, partitionIndex + 1, endIndex);
  }
}

function partition(values, startIndex, endIndex) {
  var pivotIndex = endIndex;
  var pivot = values[endIndex];
  var lessThanPivotIndex = startIndex - 1;

  for (var greaterThanPivotIndex = startIndex; greaterThanPivotIndex < pivotIndex; greaterThanPivotIndex += 1) {
    if (values[greaterThanPivotIndex] < pivot) {
      lessThanPivotIndex += 1;
      swap(values, greaterThanPivotIndex, lessThanPivotIndex);
    }
  }

  swap(values, lessThanPivotIndex + 1, pivotIndex);
  return lessThanPivotIndex + 1;
}

module.exports = quicksort;
