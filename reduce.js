let strArr = "aabbbcbck".split("")
let obj = strArr.reduce((acc,ltr) => {
    acc[ltr] = ++acc[ltr] || 1
    return acc
  },{})
console.log("07- object: ", obj) // { a: 2, b: 4, c: 2, k: 1 }
