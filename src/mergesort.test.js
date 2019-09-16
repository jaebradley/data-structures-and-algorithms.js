var mergesort = require('./mergesort');

describe('mergesort', function() {
  describe('when input has single value', function() {
    it('is unchanged', function() {
      var values = [10];
      mergesort(values);
      expect(values.length).toEqual(1);
      expect(values[0]).toEqual(10);
    });
  });

  describe('when input has two values', function() {
    describe('when values are sorted', function() {
      it('is unchanged', function() {
        var values = [10, 11];
        mergesort(values);
        expect(values.length).toEqual(2);
        expect(values[0]).toEqual(10);
        expect(values[1]).toEqual(11);
      });
    });

    describe('when values are in reverse order', function() {
      it('is sorted', function() {
        var values = [11, 10];
        mergesort(values);
        expect(values.length).toEqual(2);
        expect(values[0]).toEqual(10);
        expect(values[1]).toEqual(11);
      });
    });
  });

  describe('when input has three values', function() {
    describe('when values are sorted', function() {
      it('is unchanged', function() {
        var values = [10, 11, 12];
        mergesort(values);
        expect(values.length).toEqual(3);
        expect(values[0]).toEqual(10);
        expect(values[1]).toEqual(11);
        expect(values[2]).toEqual(12);
      });
    });

    describe('when values are in reverse order', function() {
      it('is sorted', function() {
        var values = [12, 11, 10];
        mergesort(values);
        expect(values[0]).toEqual(10);
        expect(values[1]).toEqual(11);
        expect(values[2]).toEqual(12);
      });
    });

    describe('when middle value is out of order', function() {
      it('sorts values', function() {
        var values = [10, 12, 11];
        mergesort(values);
        expect(values.length).toEqual(3);
        expect(values[0]).toEqual(10);
        expect(values[1]).toEqual(11);
        expect(values[2]).toEqual(12);
      });
    });
  });

  describe('when input has four values', function() {
    describe('when values are sorted', function() {
      it('is unchanged', function() {
        var values = [10, 11, 12, 13];
        mergesort(values);
        expect(values.length).toEqual(4);
        expect(values[0]).toEqual(10);
        expect(values[1]).toEqual(11);
        expect(values[2]).toEqual(12);
        expect(values[3]).toEqual(13);
      });
    });

    describe('when values are in reverse order', function() {
      it('is sorted', function() {
        var values = [13, 12, 11, 10];
        mergesort(values);
        expect(values.length).toEqual(4);
        expect(values[0]).toEqual(10);
        expect(values[1]).toEqual(11);
        expect(values[2]).toEqual(12);
        expect(values[3]).toEqual(13);
      });
    });

    describe('when middle value is out of order', function() {
      it('sorts values', function() {
        var values = [10, 12, 11, 13];
        mergesort(values);
        expect(values.length).toEqual(4);
        expect(values[0]).toEqual(10);
        expect(values[1]).toEqual(11);
        expect(values[2]).toEqual(12);
        expect(values[3]).toEqual(13);
      });
    });
  });
});
