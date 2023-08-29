let num = 0;
while (num <=10){
    console.log(num);
    num++;
}




const PASSWORD = 'Pass123';

let guess = prompt('Masukan Password');
while (guess !== PASSWORD) {
  guess = prompt('Password salah');
}
alert('Password benar');