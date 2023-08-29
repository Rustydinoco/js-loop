// //for of hanya bisa digunakan pada array
// //for (let variabel of iterabel){
//     statement
// }
const fruits =['apple','banana','mango','orange']

for (let fruit of fruits){
    console.log(fruit)
}


const studentRow = [
    ['a','b','c'],
    ['e','f','g'],
    ['h','i','j']
];

for(let row of studentRow){
    for(let student of row)
    console.log(student)
}