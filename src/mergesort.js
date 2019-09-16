/**
 * If length of input values is 1, return
 * Else, split values into a left subarray and a right subarray
 * Call mergesort on these two halves (recursively)
 * Merge these two subarrays back together by overwriting input values
 * The merge occurs by looking at left and right subarrays (if they both exist) and adding the one with the lesser value back to values array
 * And then for subarray that has left over values, adding those to the values array as well
 * Runtime is O(n * log n)
 */

function mergesort(values) {
  if (!values || values.length <= 1)  {
    return;
  }

  var middleIndex = values.length / 2;
  var leftValues = values.slice(0, middleIndex);
  var rightValues = values.slice(middleIndex, values.length);

  mergesort(leftValues);
  mergesort(rightValues);
  merge(leftValues, rightValues, values);

  return;
}

function merge(leftValues, rightValues, values) {
  var valuesIndex = 0;
  var leftValuesIndex = 0;
  var rightValuesIndex = 0;


  while (leftValuesIndex < leftValues.length && rightValuesIndex < rightValues.length) {
    if (leftValues[leftValuesIndex] < rightValues[rightValuesIndex]) {
      values[valuesIndex] = leftValues[leftValuesIndex];
      leftValuesIndex += 1;
    } else {
      values[valuesIndex] = rightValues[rightValuesIndex];
      rightValuesIndex += 1;
    }

    valuesIndex += 1;
  }

  while (leftValuesIndex < leftValues.length) {
    values[valuesIndex] = leftValues[leftValuesIndex];
    leftValuesIndex += 1;
    valuesIndex += 1;
  }

  while (rightValuesIndex < rightValues.length) {
    values[valuesIndex] = rightValues[rightValuesIndex];
    rightValuesIndex += 1;
    valuesIndex += 1;
  }

  return;
}

module.exports = mergesort;
