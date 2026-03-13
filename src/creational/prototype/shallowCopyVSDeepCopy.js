// ==============================
// SHALLOW COPY (CÓPIA SUPERFICIAL)
// ==============================

const original = {
  nome: 'Teste',
  endereco: {
    cidade: 'Cerrito',
  },
};

// Apenas o primeiro nível do objeto é copiado.
// Objetos internos continuam apontando para a mesma referência em memória.
// original.endereco === copia.endereco // true

const copia = { ...original }; // Realiza uma cópia superficial

copia.endereco.cidade = 'São Paulo';

console.log(original.endereco.cidade);
// Resultado: "São Paulo"
// A alteração também afeta o objeto original

// ==============================
// DEEP COPY (CÓPIA PROFUNDA)
// ==============================

const original = {
  nome: 'Pedro',
  endereco: {
    cidade: 'Caxias',
  },
};

// Todos os níveis do objeto são copiados,
// criando novas referências em memória.
// original.endereco === copia.endereco // false

const copia = structuredClone(original);

copia.endereco.cidade = 'São Paulo';

console.log(original.endereco.cidade);
// Resultado: "Caxias"
// A alteração não afeta o objeto original
