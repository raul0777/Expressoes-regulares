/* ################# Aula 01 ################# */
const texto = `
joão trouxe flores para sua amada em 10 de janeiro de 1970,
Maria era o nome dela.

Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente.
maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de 
domingo. também né! Sendo a boa mineira que é nunca esquece seu famoso
pão de queijo.
Não canso de ouvir a Maria:
"Joooooooãooooooo, o café tá prontinho aqui, Veeemm"!
`;


/* ################# Aula 03 ################# */

const arquivos = [
  'Atenção.jpg',
  'FOTO.jpeg',
  'Meu gatinho.jpg',
  'Meu gatinho.JPG',
  'Meu gatinho.JPEG',
  'Marido.png',
  'lista de compras.txt',
];

/* ################# Aula 04 ################# */
const html = '<p>Olá mundo</p> <p> Olá de novo</p> <div> Sou a div </div>';

/* ################# Aula 05 ################# */
const alfabeto =
'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ©¡ 0123456789 ¡';

/* ################# Exercício ################# */
const cpf = `
  Os CPF's são:
  654.864.841-68 498.461.648-46 168.494.165-49

  084.140.781-91

  963.987.32a.00(NÃO VÁLIDO)
  963.987.32-00(NÃO VÁLIDO)
`;


const ip = `
Os IP's são:
0.0.0.0
192.168.0.25
10.10.5.12
255.255.255.255
`;

/* ################# Aula 06 ################# */
const cpf2 = `654.864.841-68
111.111.111-11
498.461.648-46
168.494.165-49
084.140.781-91`;

/* ################# Aula 07 ################# */
const html2 = `<p 
data-teste='teste' 
class="teste">
Olá mundo</p> 
<p>Olá mundo</p> <div>Sou uma div</div>`;

/* ################# Aula 08 ################# */
const lookahead = `
  ONLINE 192.168.0.1 ABCDEF inactive
  OFFLINE 192.168.0.2 ABCDEF active
  ONLINE 192.168.0.3 ABCDEF active
  ONLINE 192.168.0.4 ABCDEF active
  OFFLINE 192.168.0.5 ABCDEF active
  OFFLINE 192.168.0.6 ABCDEF inactive
`;

module.exports = {
  texto,
  arquivos,
  html,
  alfabeto,
  cpf,
  ip,
  cpf2,
  html2,
  lookahead
}