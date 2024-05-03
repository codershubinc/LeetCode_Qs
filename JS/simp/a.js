/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
const increment = () =>  {return init++}
const decrement = () =>  {return init--}
const reset = () =>  {return init = init}

};
