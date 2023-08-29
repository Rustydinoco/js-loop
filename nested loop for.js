const jawaban ='ABCD'
 
for (let i=1; i <=4; i++){
    console.log(`${i}. SOAL ${i}`)
    
    for (let j=0; j < jawaban.length; j++)
    console.log(` ${jawaban[j]}.    jawaban ${j}`)
}