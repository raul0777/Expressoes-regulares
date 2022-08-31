/* ################# Aula 01 ################# */
//  g - global (encontra todas as ocorrências)
//  i - insensitive
// () - grupo
//  | - ou

const { texto } = require('./base');

const regExp1 = /(Maria|João)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

if (found) {
console.log(found[0]);
console.log(found[1]);
console.log(found[2]);
};