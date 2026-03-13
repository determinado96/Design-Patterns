const person = {
  name: 'John Doe',
  age: 30,
};

console.log('Pessoa original:', person);

// person -> person2
// Cria um novo objeto cujo prototype é "person"
const person2 = Object.create(person);

console.log('Person2 (objeto com prototype person):', person2);
console.log('Nome de person2 (herdado do prototype):', person2.name);

// Atenção:
// Criar uma nova propriedade em person2 NÃO altera o prototype.
person2.name = 'Jane Doe';

// Aqui estamos alterando diretamente o prototype de person2,
// ou seja, o objeto "person".
Object.getPrototypeOf(person2).name = 'Name Test';

console.log('Person2 após alteração do nome:', person2);
console.log('Person original após alteração via prototype:', person);

// ----------------------------------------------------
// Aplicações do Prototype
// ----------------------------------------------------

// Exemplo INEFICIENTE:
//
// function Report(data) {
//   this.data = data;
//
//   // Se você criar 5.000 relatórios,
//   // 5.000 cópias do método generatePDF serão criadas,
//   // desperdiçando memória.
//   this.generatePDF = function () {
//     console.log("Gerando PDF complexo... do relatório com dados:", this.data);
//   };
// }

// Forma CORRETA usando prototype

function Report(data) {
  this.data = data;
}

// O método é colocado no prototype da função.
// Assim, todas as instâncias compartilham o mesmo método em memória.
Report.prototype.generatePDF = function () {
  console.log('Gerando PDF complexo... do relatório com dados:', this.data);
};

const r1 = new Report('Relatório A');
const r2 = new Report('Relatório B');

r1.generatePDF();
r2.generatePDF();

console.log(
  'r1 e r2 compartilham o mesmo método generatePDF:',
  r1.generatePDF === r2.generatePDF,
);
