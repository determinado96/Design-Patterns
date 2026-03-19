interface Item {
  // CONTRATO comum: qualquer Item precisa saber calcular seu preço
  getPrice(): number;
}

class Product implements Item {
  constructor(private name: string, private price: number) { }

  // IMPLEMENTAÇÃO 1 do contrato
  // Produto simples: só retorna seu próprio preço
  getPrice(): number {
    return this.price;
  }
}

class Combo implements Item {
  // Aqui está a chave do Composite:
  // O array aceita qualquer coisa que implemente Item
  // (Product, Combo ou qualquer outro no futuro)
  public items: Item[] = [];
  
  constructor(private name: string) { }

  add(item: Item) {
    this.items.push(item);
  }

  // IMPLEMENTAÇÃO 2 do contrato
  // Combo não tem preço próprio, ele calcula baseado nos itens internos
  getPrice(): number {

    // 🔥 POLIMORFISMO ACONTECE AQUI:
    // "item" é do tipo Item, mas pode ser:
    // - Product  -> retorna preço direto
    // - Combo    -> executa outro reduce (recursão)
    //
    // 👉 Ou seja: a MESMA chamada (item.getPrice())
    // 👉 tem COMPORTAMENTOS DIFERENTES dependendo do objeto

    return this.items.reduce((total, item) => {
      console.log(item);
      return total + item.getPrice(); // <-- polimorfismo em ação
    }, 0);
  }
}

// ---------------- USO ----------------

const apple = new Product("Apple", 5);
const banana = new Product("Banana", 3);

const fruitCombo = new Combo("Fruit Combo");
fruitCombo.add(apple);   // Product
fruitCombo.add(banana);  // Product

const megaCombo = new Combo("Mega Combo");
megaCombo.add(fruitCombo);             // Combo (nível abaixo)
megaCombo.add(new Product("Orange", 4)); // Product

// Aqui você vê a estrutura (árvore)
// Aqui dispara toda a cadeia de chamadas polimórficas:
// megaCombo -> fruitCombo -> products
megaCombo.getPrice(); // 12