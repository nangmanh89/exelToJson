let excelToJson = require('convert-excel-to-json');
 
let result = excelToJson({
    sourceFile: 'info.xlsx',
    columnToKey: {
        A: 'Name',
        B: 'Adress',
        C: 'Phone',
        D: 'Email'
    }
});
console.log(result)