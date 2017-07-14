// flatten an array of arbitrarily nested arrays of integers into a flat array of integers
flatten = arr => {
    let _hasNonIntegerItems = false;

    // validate that the input is an array
    if (!(arr instanceof Array)) {
        return undefined;
    }

    // The reduce() method applies a function to an accumulator and each element in the array (from left to right)
    // to reduce it to a single value.  In this case, it will just keep appending either:
    // 1) a non array integer
    // 2) the result of the recursive call into itself
    // onto the existing array.

    // In the case that the current item(b) is an array, the function(flatten) will call itself recursively
    let flattenedArray = arr.reduce((a, b) => {
        let currentItem = b;        
        if (Array.isArray(currentItem)) {
           currentItem = flatten(currentItem);

            // validate that each item in this current array that we are concatenating to the 
            // accumulator is an 
            currentItem.forEach(i => {
               _hasNonIntegerItems = _hasNonIntegerItems || isNonInteger(i);
            });
        } else {
            _hasNonIntegerItems = _hasNonIntegerItems || isNonInteger(currentItem);
        }

        // current item here is either a single non array integer
        // or an array of integers as created by a recursive call to this function
        return a.concat(currentItem);
    }, []);    
    
    if (_hasNonIntegerItems) {
        throw new Error('Array has non-numeric items');
    }

    return flattenedArray;
}

// Check whether value is not an integer
isNonInteger = val => {
    // If isNaN(x) returns false, you can use x in an arithmetic expression not making the expression return NaN. 
    // If it returns true, x will make every arithmetic expression return NaN.
    if (isNaN(val) || !Number.isInteger(val)) {
        return true;
    }       

    return false;
}

module.exports = flatten;