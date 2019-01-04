var MinHeap = function() {
  var values = [null];

  function getParentIndex(childIndex) {
    return Math.floor(childIndex / 2);
  }

  function getChildIndices(parentIndex) {
    var leftChild = parentIndex * 2;

    return {
      leftChild: leftChild,
      rightChild: leftChild + 1,
    };
  }

  function swap(firstIndex, secondIndex) {
    var firstValue = values[firstIndex];

    values[firstIndex] = values[secondIndex];
    values[secondIndex] = firstValue;
  }

  function getSmallestNode(firstIndex, secondIndex) {
    var firstValue = values[firstIndex];
    var secondValue = values[secondIndex];

    if (firstValue > secondValue) {
      return {
        value: secondValue,
        index: secondIndex,
      };
    }

    return {
      value: firstValue,
      index: firstIndex,
    };
  }

  function add(value) {
    var valueIndex,
        parentIndex,
        parentValue;

    values.push(value);

    valueIndex = getSize();
    parentIndex = getParentIndex(valueIndex);
    parentValue = values[parentIndex];

    while (parentValue > value && parentIndex >= 1) {
      swap(parentIndex, valueIndex);

      valueIndex = parentIndex;
      parentIndex = getParentIndex(valueIndex);
      parentValue = values[parentIndex];
    }
  }

  function remove() {
    var firstValue = values[1],
        lastValueIndex = values.length - 1,
        lastValue = values.splice(lastValueIndex, 1)[0];

    if (getSize() > 0) {
      values[1] = lastValue;
      lastValueIndex = 1;

      var childIndices = getChildIndices(lastValueIndex);
      var smallestNode = getSmallestNode(childIndices.leftChild, childIndices.rightChild);

      while (lastValue > smallestNode.value) {
        swap(lastValueIndex, smallestNode.index);
        lastValueIndex = smallestNode.index;

        var childIndices = getChildIndices(lastValueIndex);
        smallestNode = getSmallestNode(childIndices.leftChild, childIndices.rightChild);
      }
    }

    return firstValue;
  }

  function getFirst() {
    return values[1];
  }

  function getSize() {
    return values.length - 1;
  }

  return {
    add: add,
    remove: remove,
    getFirst: getFirst,
    getSize: getSize,
  };
};

module.exports = MinHeap;
