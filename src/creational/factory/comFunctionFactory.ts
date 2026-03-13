interface Notification {
  send(message: string): void;
}

class EmailNotification implements Notification {
  badge: string;
  body: string;
  data: any;
  dir: NotificationDirection;
  icon: string;
  lang: string;
  onclick: ((this: Notification, ev: Event) => any) | null;
  onclose: ((this: Notification, ev: Event) => any) | null;
  onerror: ((this: Notification, ev: Event) => any) | null;
  onshow: ((this: Notification, ev: Event) => any) | null;
  requireInteraction: boolean;
  silent: boolean | null;
  tag: string;
  title: string;
  close(): void {
    throw new Error("Method not implemented.");
  }
  addEventListener(type: unknown, listener: unknown, options?: unknown): void {
    throw new Error("Method not implemented.");
  }
  removeEventListener(type: unknown, listener: unknown, options?: unknown): void {
    throw new Error("Method not implemented.");
  }
  dispatchEvent(event: Event): boolean {
    throw new Error("Method not implemented.");
  }
  send(message: string): void {
    console.log('Enviando EMAIL:', message);
  }
}

class SMSNotification implements Notification {
  badge: string;
  body: string;
  data: any;
  dir: NotificationDirection;
  icon: string;
  lang: string;
  onclick: ((this: Notification, ev: Event) => any) | null;
  onclose: ((this: Notification, ev: Event) => any) | null;
  onerror: ((this: Notification, ev: Event) => any) | null;
  onshow: ((this: Notification, ev: Event) => any) | null;
  requireInteraction: boolean;
  silent: boolean | null;
  tag: string;
  title: string;
  close(): void {
    throw new Error("Method not implemented.");
  }
  addEventListener(type: unknown, listener: unknown, options?: unknown): void {
    throw new Error("Method not implemented.");
  }
  removeEventListener(type: unknown, listener: unknown, options?: unknown): void {
    throw new Error("Method not implemented.");
  }
  dispatchEvent(event: Event): boolean {
    throw new Error("Method not implemented.");
  }
  send(message: string): void {
    console.log('Enviando SMS:', message);
  }
}

// Função fábrica responsável por criar o tipo correto de notificação
function createNotification(type: string): Notification {
  // Observação:
  // Poderia ser utilizado um objeto (map) para evitar vários if/else.

  if (type === 'email') {
    return new EmailNotification();
  }

  if (type === 'sms') {
    return new SMSNotification();
  }

  // Caso o tipo não exista, lança erro
  throw new Error('Tipo de notificação inválido');
}

// Cria uma notificação do tipo desejado
const notification = createNotification('email');

// Envia a mensagem
notification.send('Hello!');
