console.log("Hello")

//Add to existing function
console.hello = function () {
    console.log("I am hello()")
}
console.log(console)
console.hello()

//Passing function as param

var add = function(a, b){
    return a+b
}

function artihmatic(fn, a , b){
    return fn(a,b)
}

var r = artihmatic(add, 10 ,20)
console.log(r)

//Inline declaration
var r = artihmatic(function(a, b) {
    return a - b
}, 10 ,20)
console.log(r)