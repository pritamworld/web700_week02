var college = "Seneca College - BTT"
var name = new String("Pritesh Patel")

var a = college + name
console.log(`${college}`)
console.log(`${name}`)
console.log(`${a}`)

console.log(`Length: ${college.length}`)
console.log(`Upper: ${college.toUpperCase()}`)
console.log(`Lower: ${name.toLowerCase()}`)
console.log(`IndexOf: ${college.indexOf("College")}`)
console.log(`IndexOf: ${college.indexOf("hello")}`)
console.log(`endsWith: ${college.endsWith("BTT")}`)
console.log(`startsWith: ${college.startsWith("Seneca")}`)
console.log(`includes: ${college.includes("College")}`)

var s = college.split(' ')
console.log(s)

