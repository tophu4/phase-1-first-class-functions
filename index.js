function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    return function fn (){console.log('fn() called')};
}

function returnsAnAnonymousFunction() {
    return function () {console.log('anon function called')};
}