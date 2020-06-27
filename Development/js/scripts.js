// السؤال الأول
// 1
const name = "fatmah";
// 2
let age = 18;
// 3 and 4
console.log(
    "انا"+
    "فاطمه"+
    "و عمري"+
    " "+
    "18")
// 5 and 6
let  age5 = 5*age;
console.log("5*age")
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// السؤال الثاني
// 1
let f = ["الرسم, البرمجه, التزلج"]

// 2
f.push(18)
f[4] = 16
console.log(f)
console.log(f.length)
// 3
f.pop()
console.log(f)
// 4

let u = {
    name: "web",
    like: "javascrept" ,

 }
// 5
s["TA"] = ["نانسي", "موضي، ", "حسين","رهف"]


// 6
console.log(u.name)
console.log("name")
// 7
console.log(s["TA"][0])
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// البونص
// 1

u["sayHello"] = function() {
    console.log("مرحبا")

}
u["age"] = function(age){
    age *= 5;
    console.log(age)
}
console.log(u)


// 2
u["sayHello"]()
u["age"]()
// console results => console.png
