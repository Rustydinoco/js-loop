const studentScore ={
    a : 45,
    b : 59,
    c : 83,
    d : 27,
    e : 67,
}

for (let Scores in studentScore){
    console.log(`${Scores} nilai =${studentScore[Scores]}`)
}


// hasil rata rata
let total = 0;
let score = Object.values(studentScore);

for (let scores of score){
    total += scores;
   
}
console.log(total/score.length)