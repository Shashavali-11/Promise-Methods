// all(promises)
var p1 = Promise.resolve(1)
var p2 = Promise.resolve(2)
Promise.all([p1, p2]).then(result => console.log(result))  // [1, 2]
// ------------------------------------------------------------------>

// race(promises)
var p3 = new Promise((resolve) => setTimeout(resolve, 500, "One"))
var p4 = new Promise((resolve) => setTimeout(resolve, 100, "Two"))
Promise.race([p3, p4]).then(result => console.log(result))  // Two

