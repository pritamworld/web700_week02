var a = [10, 20, 30, 40]
var b = new Array('a', 'b', 'c')
console.log(typeof(a))
console.log(typeof(b))

console.log(a)

console.log(a[0])
console.log(a[2])
console.log(a[4])

a[5] = 500
console.log(a[0])
console.log(a)

a.push(600)
console.log(a)
console.log(a.length)
