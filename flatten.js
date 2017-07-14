// flatten an array of arbitrarily nested arrays of integers into a flat array of integers
module.exports = arr => {
    // validate that the input is an array
    if (!(arr instanceof Array)) {
        return undefined;
    }

    // validate that each item in the array is an integer
    arr.forEach(i => {

    });

    // The reduce() method applies a function against an accumulator and each element in the array (from left to right)
    // to reduce it to a single value.  In this case, it will just keep appending either:
    // 1) a non array integer
    // 2) the result of the recursive call into itself
    // onto the existing array.

    // In the case that the current item(b) is an array, the function(flatten) will call itself recursively
    return arr.reduce((a, b) => {
        a.concat(Array.isArray(b) ? flatten(b) : b)
    }, []);    
}
