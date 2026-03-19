// === Interfaces de produtos ===
interface IButton {
  render(): void;
  click(): void;
}

interface ITextBox {
  render(): void;
  setText(text: string): void;
}

interface ISlider {
  render(): void;
  setValue(value: number): void;
}

// === Fábrica abstrata (cria vários produtos) ===
interface IUIFactory {
  createButton(): IButton;
  createTextBox(): ITextBox;
  createSlider(): ISlider;
}

// === Produtos concretos – Light Theme ===
class LightButton implements IButton {
  constructor(private color = "white", private size = "medium") {}
  render() { console.log(`Light IButton - Cor: ${this.color}, Tamanho: ${this.size}`); }
  click() { console.log("Botão claro clicado"); }
}

class LightTextBox implements ITextBox {
  private text = "";
  constructor(private color = "white", private width = 200) {}
  render() { console.log(`Light ITextBox - Cor: ${this.color}, Largura: ${this.width}px`); }
  setText(text: string) { this.text = text; console.log(`Texto atualizado: ${this.text}`); }
}

class LightSlider implements ISlider {
  private value = 0;
  constructor(private color = "lightgray", private max = 100) {}
  render() { console.log(`Light ISlider - Cor: ${this.color}, Max: ${this.max}`); }
  setValue(value: number) { this.value = value; console.log(`Valor do slider: ${this.value}`); }
}

// === Produtos concretos – Dark Theme ===
class DarkButton implements IButton {
  constructor(private color = "black", private size = "medium") {}
  render() { console.log(`Dark IButton - Cor: ${this.color}, Tamanho: ${this.size}`); }
  click() { console.log("Botão escuro clicado"); }
}

class DarkTextBox implements ITextBox {
  private text = "";
  constructor(private color = "black", private width = 200) {}
  render() { console.log(`Dark ITextBox - Cor: ${this.color}, Largura: ${this.width}px`); }
  setText(text: string) { this.text = text; console.log(`Texto atualizado: ${this.text}`); }
}

class DarkSlider implements ISlider {
  private value = 0;
  constructor(private color = "darkgray", private max = 100) {}
  render() { console.log(`Dark ISlider - Cor: ${this.color}, Max: ${this.max}`); }
  setValue(value: number) { this.value = value; console.log(`Valor do slider: ${this.value}`); }
}

// === Fábricas concretas ===
class LightThemeFactory implements IUIFactory {
  createButton(): IButton { return new LightButton(); }
  createTextBox(): ITextBox { return new LightTextBox(); }
  createSlider(): ISlider { return new LightSlider(); }
}

class DarkThemeFactory implements IUIFactory {
  createButton(): IButton { return new DarkButton(); }
  createTextBox(): ITextBox { return new DarkTextBox(); }
  createSlider(): ISlider { return new DarkSlider(); }
}

// === Cliente ===
function renderUI(factory: IUIFactory) {
  const button = factory.createButton();
  const textBox = factory.createTextBox();
  const slider = factory.createSlider();

  button.render();
  button.click();

  textBox.render();
  textBox.setText("Olá mundo");

  slider.render();
  slider.setValue(75);
}

// === Uso ===
const theme: "light" | "dark" = "dark";
const factory = theme === "light" ? new LightThemeFactory() : new DarkThemeFactory();

renderUI(factory);