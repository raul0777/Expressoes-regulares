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
const { texto } = require('./base')
const regExp1 = /João| Maria/gi;

// console.log(texto);
// console.log(texto.match(regExp1));
// console.log(texto.replace(/(João|Maria)/gi, '<b>$1</b>'));
console.log(texto.replace(/(João|Maria)/gi, function(input) {
  return ' ####### ' + input.toUpperCase() + ' ####### ';
}));

/* ################# Aula 03 ################# */
// * (opcionais) 0 ou n
// + (obrigatório) 1 ou n
// ? (opcionais) 0 ou 1
// \ Caractere de escape
// {n,m} mínimo e máximo
// {10,} no mínimo 10
// {,10} no máximo 10
// {5,10} de 5 a 10

const { texto, arquivos } = require('./base');
/* console.log(texto);
const regExp1 = /Jo+ão+/gi
console.log(texto.match(regExp1)); */

const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp2);

  //if(!valido) continue;

  console.log(arquivo, valido);
}

/* ################# Aula 04 ################# */
// <.+>.+<\/.+>

const { html } = require('./base');

console.log(html);
console.log(html.match(/<.+>.+<\/.+>/g)); //greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); //non-greedy

/* ################# Aula 05 ################# */
//[abc] ~> Conjunto
//[^Tudo menos isso] ~> Negação
//[0-9] ou [a-z] ~> Range

const { alfabeto } = require('./base');

console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/g)); //Numérico
console.log(alfabeto.match(/[A-Z]+/g)); //alfabeto
console.log(alfabeto.match(/[^a-zA-Z0-9]/g)); //Negação
console.log(alfabeto.match(/[\u00a0-\u00BA]+/g)); //Unicode
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W/g)); //Negação
console.log(alfabeto.match(/\d+/g)); //Numérico
console.log(alfabeto.match(/\D+/g)); //Negação
console.log(alfabeto.match(/\s+/g)); //espaços em branco
console.log(alfabeto.match(/\S+/g)); //Negação

/* ################# Exercício ################# */
const { cpf, ip } = require('./base')
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

console.log(cpf.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));
console.log(cpf.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));
console.log(cpf.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));

console.log(ip.match(ipRegExp));

/* ################# Aula 06 ################# */
// ^ ~> Começa com
// $ ~> Termina com
// [^] ~> Negação
// m ~> Multiline -> procura em linhas

const { cpf2 } = require('.base');

const cpf = '654.864.841-68';
const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpf2.match(cpfRegExp));

/* ################# Aula 07 ################# */
//1$ 2$ 3$ <~ Retrovisores
const { html2 } = require('../aula 00/base');

//console.log(html2)
//console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g));
console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAH $3 HAHA $4'));