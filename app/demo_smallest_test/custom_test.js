//src.js
var pluralize = function (word, number) {
    if (number === 1) {
        return word;
    }
    else {
        return word + "s";
    }
};

//framework.js
var assert = function (a, b) {
    if (a === b) {
        console.log('Test passed!', a, 'equals', b);
    }
    else {
        console.error('Test Failed! Expected', a, 'to equal', b);
    }
};

//spec.js
assert(pluralize('cat', 0), 'cats');
assert(pluralize('cat', 1), 'cat');
assert(pluralize('cat', 2), 'cats');
