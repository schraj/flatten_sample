// var list1 = [[0, 1], [2, 3], [4, 5]];
// var list2 = [0, [1, [2, [3, [4, [5]]]]]];
// const t1 = flatten(list1); 
// // returns [0, 1, 2, 3, 4, 5]

// const t2 = flatten(list2); 

const flatten = require('../flatten');

const assert = require('assert');
describe('Flatten', function() {
    it('should return undefined when the parameter is not provided', function() {
        const result = flatten();
        assert.equal(undefined, result);
    });

    it('should return undefined when the parameter is not an array', function() {
        const result = flatten(1);
        assert.equal(undefined, result);
    });

    it('should return undefined when the parameter array has a non-integer value within it', function() {
        const result = flatten([1,'a',2]);
        assert.equal(undefined, result);
    });
});