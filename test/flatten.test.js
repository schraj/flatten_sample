const flatten = require('../flatten');
const assert = require('assert');

describe('Flatten', function () {
    it('should return an empty array when provided one', function () {
        const input = [];
        const expected = 0;
        const result = flatten(input);
        assert.equal(result.length, 0);
    });

    it('should return same array when it is not nested', function () {
        const input = [1, 2];
        const expected = [1, 2];
        const result = flatten(input);
        assert.deepEqual(result, expected);
    });

    it('should return flattened array when nested at single level', function () {
        const input = [[0, 1], [2, 3], [4, 5]];
        const expected = [0, 1, 2, 3, 4, 5];
        const result = flatten(input);
        assert.deepEqual(result, expected);
    });

    it('should return flattened array when nested to multiple levels', function () {
        const input = [0, [1, [2, [3, [4, [5]]]]]];
        const expected = [0, 1, 2, 3, 4, 5];
        const result = flatten(input);
        assert.deepEqual(result, expected);
    });

    describe('When Validating Arguments', function () {
        it('should return undefined when the parameter is not an array', function () {
            const result = flatten(1);
            assert.equal(undefined, result);
        });

        it('should throw an error when the parameter array has a non-integer/letter value within it', function () {
            assert.throws(() => flatten([1, 'a', 2]));
        });

        it('should throw an error when the parameter array has a non-integer/float value within it', function () {
            assert.throws(() => flatten([1, 'a', 2]));
        });

        it('should throw an error when the parameter array has a non-integer/object value within it', function () {
            assert.throws(() => flatten([{}, 2]));
        });

        it('should throw an error when the parameter array has a non-integer value in a nested array within it', function () {
            assert.throws(() => flatten([1, [2, 'a'], 4]));
        });
    });
});