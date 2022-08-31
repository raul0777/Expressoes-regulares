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

/* ################# Aula 02 ################# */
// (...(...(...)))(...)
//  $1  $2  $3     $4 ~> Grupos
const { texto } = require('../aula 00/base');
const regExp1 = /João| Maria/gi;

// console.log(texto);
// console.log(texto.match(regExp1));
// console.log(texto.replace(/(João|Maria)/gi, '<b>$1</b>'));
console.log(texto.replace(/(João|Maria)/gi, function(input) {
  return ' ####### ' + input.toUpperCase() + ' ####### ';
}));