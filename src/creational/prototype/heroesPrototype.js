const BasePrototype = {
  name: null,
  life: null,
  attack: null,
  defense: null,
  abilities: null,

  // abilities: () => [] -> mais seguro, cria um novo array para cada instância
  // abilities: [] -> não é seguro, pois arrays são referências compartilhadas

  // Método responsável por clonar o objeto atual,
  // criando um novo objeto cujo prototype é o objeto original.
  clone() {
    return Object.create(this);
  },
};

const characterFactory = {
  prototypes: {
    warrior: BasePrototype.clone(),
    archer: BasePrototype.clone(),
  },

  // Cria um novo personagem baseado no tipo informado
  create(type) {
    return this.prototypes[type].clone();

    // Observação:
    // Caso existam objetos ou estruturas aninhadas (arrays/objetos),
    // pode ser necessário tratar cópia profunda (deep copy).
  },
};

const thor = characterFactory.create('warrior').clone();
thor.name = 'Thor';
thor.life = 100;
thor.attack = 95;
thor.defense = 75;
thor.abilities = ['Mjolnir', 'Controle de Raios', 'Voo', 'Força Asgardiana'];

const hulk = characterFactory.create('warrior').clone();
hulk.name = 'Hulk';
hulk.life = 120;
hulk.attack = 98;
hulk.defense = 90;
hulk.abilities = [
  'Força Colossal',
  'Regeneração',
  'Salto Gigante',
  'Fúria Crescente',
];

const arqueiroVerde = characterFactory.create('archer').clone();
arqueiroVerde.name = 'Arqueiro Verde';
arqueiroVerde.life = 90;
arqueiroVerde.attack = 85;
arqueiroVerde.defense = 70;
arqueiroVerde.abilities = [
  'Precisão Extrema',
  'Flecha Explosiva',
  'Flecha de Gás',
  'Acrobacia',
];

console.log(thor);
console.log(hulk);
console.log(arqueiroVerde);
