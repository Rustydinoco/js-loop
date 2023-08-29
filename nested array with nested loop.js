const studentRow = [
    ['a','b','c'],
    ['e','f','g'],
    ['h','i','j']
];

for (let i=0; i < studentRow.length; i++){
    const row = studentRow[i]
    console.log(row)
    for (let j=0; j < row.length; j++){
        console.log(row[j])
    }
}
