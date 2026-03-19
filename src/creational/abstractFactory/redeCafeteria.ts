// Produtos
interface IBebida {
  descricao(): string;
}

interface IAcompanhante {
  descricao(): string;
}

// Fábrica para criar vários produtos
interface ICafeteria {
  criarBebida(tipo: TipoBebida): IBebida;
  criarAcompanhante(tipo: TipoAcompanhante): IAcompanhante;
}

// Produtos concretos
class Espresso implements IBebida {
  private nome: string;
  private preco: number;

  constructor() {
    this.nome = 'Café Expresso';
    this.preco = 5.7;
  }

  descricao(): string {
    return this.nome;
  }
}

class Cappuccino implements IBebida {
  private nome: string;
  private preco: number;

  constructor() {
    this.nome = 'Cappuccino';
    this.preco = 7.5;
  }

  descricao(): string {
    return this.nome;
  }
}

class Latte implements IBebida {
  private nome: string;
  private preco: number;

  constructor() {
    this.nome = 'Latte';
    this.preco = 8.0;
  }

  descricao(): string {
    return this.nome;
  }
}

class ColdBrew implements IBebida {
  private nome: string;
  private preco: number;

  constructor() {
    this.nome = 'Cold Brew';
    this.preco = 9.0;
  }

  descricao(): string {
    return this.nome;
  }
}

class Croissant implements IAcompanhante {
  private nome: string;
  private preco: number;

  constructor() {
    this.nome = 'Croissant';
    this.preco = 6.5;
  }

  descricao(): string {
    return this.nome;
  }
}

class Muffin implements IAcompanhante {
  private nome: string;
  private preco: number;

  constructor() {
    this.nome = 'Muffin';
    this.preco = 5.0;
  }

  descricao(): string {
    return this.nome;
  }
}

class Cookie implements IAcompanhante {
  private nome: string;
  private preco: number;

  constructor() {
    this.nome = 'Cookie';
    this.preco = 4.5;
  }

  descricao(): string {
    return this.nome;
  }
}

class PaoDeQueijo implements IAcompanhante {
  private nome: string;
  private preco: number;

  constructor() {
    this.nome = 'Pão de Queijo';
    this.preco = 3.5;
  }

  descricao(): string {
    return this.nome;
  }
}

class CafeteriaItalianaFactory implements ICafeteria {
  private bebidas = new Map<TipoBebida, () => IBebida>([
    [TipoBebida.ESPRESSO, () => new Espresso()],
    [TipoBebida.CAPPUCCINO, () => new Cappuccino()],
  ]);

  private acompanhantes = new Map<TipoAcompanhante, () => IAcompanhante>([
    [TipoAcompanhante.CROISSANT, () => new Croissant()],
    [TipoAcompanhante.MUFFIN, () => new Muffin()],
  ]);

  criarBebida(tipo: TipoBebida): IBebida {
    const factory = this.bebidas.get(tipo);

    if (!factory) {
      throw new Error('Bebida não disponível nesta cafeteria');
    }

    return factory();
  }

  criarAcompanhante(tipo: TipoAcompanhante): IAcompanhante {
    const factory = this.acompanhantes.get(tipo);

    if (!factory) {
      throw new Error('Acompanhamento não disponível nesta cafeteria');
    }

    return factory();
  }
}

class CafeteriaModernaFactory implements ICafeteria {
  private bebidas = new Map<TipoBebida, () => IBebida>([
    [TipoBebida.LATTE, () => new Latte()],
    [TipoBebida.COLDBREW, () => new ColdBrew()],
  ]);

  private acompanhantes = new Map<TipoAcompanhante, () => IAcompanhante>([
    [TipoAcompanhante.COOKIE, () => new Cookie()],
    [TipoAcompanhante.PAODEQUEIJO, () => new PaoDeQueijo()],
  ]);

  criarBebida(tipo: TipoBebida): IBebida {
    const factory = this.bebidas.get(tipo);

    if (!factory) {
      throw new Error('Bebida não disponível nesta cafeteria');
    }

    return factory();
  }

  criarAcompanhante(tipo: TipoAcompanhante): IAcompanhante {
    const factory = this.acompanhantes.get(tipo);

    if (!factory) {
      throw new Error('Acompanhamento não disponível nesta cafeteria');
    }

    return factory();
  }
}

enum TipoBebida {
  ESPRESSO,
  CAPPUCCINO,
  LATTE,
  COLDBREW,
}

enum TipoAcompanhante {
  CROISSANT,
  MUFFIN,
  COOKIE,
  PAODEQUEIJO,
}

const cafeteriaItaliana = new CafeteriaItalianaFactory();
const bebida1 = cafeteriaItaliana.criarBebida(TipoBebida.CAPPUCCINO);
const acompanhamento1 = cafeteriaItaliana.criarAcompanhante(TipoAcompanhante.CROISSANT);

console.log(bebida1.descricao()); // "Espresso italiano intenso"
console.log(acompanhamento1.descricao()); // "Croissant amanteigado"
