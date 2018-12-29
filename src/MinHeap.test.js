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
      it('value is first value', function() {
        var heap = MinHeap();
        heap.add(1);
        expect(heap.getFirst()).toBe(1);
      });

      describe('add smaller value', function() {
        it('smaller value is first value', function() {
          var heap = MinHeap();
          heap.add(1);
          heap.add(0);
          expect(heap.getFirst()).toBe(0);
        });
      });

      describe('add larger value', function() {
        it('initial value is first value', function() {
          var heap = MinHeap();
          heap.add(1);
          heap.add(2);
          expect(heap.getFirst()).toBe(1);
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

      describe('when five values exist', function() {
        it('removes values in order', function() {
          var heap = MinHeap();
          heap.add(1);
          heap.add(10);
          heap.add(2);
          heap.add(9);
          heap.add(3);
          heap.add(8);
          heap.add(4);
          heap.add(7);
          heap.add(5);
          heap.add(6);

          expect(heap.remove()).toBe(1);
          expect(heap.remove()).toBe(2);
          expect(heap.remove()).toBe(3);
          expect(heap.remove()).toBe(4);
          expect(heap.remove()).toBe(5);
          expect(heap.remove()).toBe(6);
          expect(heap.remove()).toBe(7);
          expect(heap.remove()).toBe(8);
          expect(heap.remove()).toBe(9);
          expect(heap.remove()).toBe(10);
        });
      })
    });
  });
});
