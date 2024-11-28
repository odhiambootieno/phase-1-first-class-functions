// Function that takes a callback function as an argument and calls it
function receivesAFunction(callback) {
callback();
}

// Function that returns a named function
function returnsANamedFunction() {
    return function Namefunction() {
     // This function can have some implementations when needed
    };
}

// Functions that returns anonymous functions
function returnsAnAnonymousFunction() {
    return function() {
    // This function can also have some implementations if needed
    };
}


// Exporting the functions for testing
modulr.export = {
receivesAFunction,
returnsANamedFunction,
returnsAnAnonymousFunction
};

