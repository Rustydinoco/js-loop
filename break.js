// for (let k =0; k<100; k++){
//     console.log(k)
//     if(k === 50) break;
// }

let input = prompt ('Write something!');

while(true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop") break;
}
alert('ok')