let maximum = parseInt(prompt("isi angka!!"));
while (!maximum) {
  maximum = parseInt(prompt("isi angka!!"));
}

const targetNumber = Math.floor(Math.random() * maximum) + 1;
console.log(targetNumber);

let guess = parseInt(prompt("Isi Jawabanmu"));

while (guess !== targetNumber) {
  if (guess > targetNumber) {
    guess = parseInt(prompt("terlalu banyak"));
  } else {
    guess = parseInt(prompt(" terlalu sedikit"));
  }
}

alert("jawaban kamu benar");
