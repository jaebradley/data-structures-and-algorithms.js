var MinHeap = require('./MinHeap');

describe('MinHeap', function() {
  describe('#getFirst', function() {
    describe('when initialized', function() {
      it('first value is undefined', function() {
        var heap = MinHeap();
        expect(heap.getFirst()).toBeUndefined();
      });
    });

    describe('after initialization', function() {
      describe('when a value is added', function() {
        it('first value is added value', function() {
          var heap = MinHeap();
          heap.add(1);
          expect(heap.getFirst()).toBe(1);
        });

        describe('when the value is removed', function() {
          it('first value is undefined', function() {
            var heap = MinHeap();
            heap.add(1);
            heap.remove();
            expect(heap.getFirst()).toBeUndefined();
          });
        });
      });
    });
  });

  describe('#add', function() {
    describe('when empty', function() {
      describe('add smaller value', function() {
        it('smaller value is first value', function() {
          var heap = MinHeap();
          heap.add(1);
          heap.add(0);
          expect(heap.getFirst()).toBe(0);
        });
      });

      describe('add larger value', function() {
        it('smaller value is first value', function() {
          var heap = MinHeap();
          heap.add(1);
          heap.add(2);
          expect(heap.getFirst()).toBe(1);
        });

        describe('add smallest value', function() {
          var heap = MinHeap();
          heap.add(1);
          heap.add(2);
          heap.add(0);
          expect(heap.getFirst()).toBe(0);
        });
      });
    });
  });

  describe('#remove', function() {
    describe('when empty', function() {
      it('value is undefined', function() {
        var heap = MinHeap();
        expect(heap.remove()).toBeUndefined();
      });
    });

    describe('when not empty', function() {
      describe('when single value exists', function() {
        it('is single value', function() {
          var heap = MinHeap();
          heap.add(1);
          expect(heap.remove()).toBe(1);
        });
      });

      describe('when two values exist', function() {
        it('removes smaller value', function() {
          var heap = MinHeap();
          heap.add(1);
          heap.add(2);
          expect(heap.remove()).toBe(1);
        });
      });

      describe('when many values exist', function() {
        it('removes values in order', function() {
          var i,
              values = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6],
              heap = MinHeap();
          for (i = 0; i < values.length; i += 1) {
            heap.add(values[i]);
          }

          for (i = 0; i < values.length; i += 1) {
            expect(heap.remove()).toBe(i + 1);
          }
        });
      })
    });
  });
});
