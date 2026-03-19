class Product {
  constructor(public name: string, public price: number) {}
}

class Combo {
  constructor(public name: string, public items: (Product | Combo)[]) {}
}

// Problemas aqui:
// *instanceof (perdemos polimorfismo, a troca dinâmica é feita manualmente)
// lógica espalhada
// difícil de escalar
// quebra OCP
function calculatePrice(item: Product | Combo): number {
  if (item instanceof Product) {
    return item.price;
  }

  if (item instanceof Combo) {
    return item.items.reduce((total, i) => total + calculatePrice(i), 0);
  }

  return 0;
}