class EmailNotification {
  send(message: string) {
    console.log('Enviando EMAIL:', message);
  }
}

class SMSNotification {
  send(message: string) {
    console.log('Enviando SMS:', message);
  }
}

class NotificationService {
  send(type: string, message: string) {
    if (type === 'email') {
      const notification = new EmailNotification();
      notification.send(message);
    }

    if (type === 'sms') {
      const notification = new SMSNotification();
      notification.send(message);
    }
  }
}

// Problemas desta implementação:

// Alto acoplamento com classes concretas (EmailNotification e SMSNotification)

// Sempre que surgir um novo tipo de notificação,
// será necessário modificar a classe NotificationService

// O código tende a crescer com vários if/else ou switch

// Viola o princípio Open/Closed (OCP),
// pois a classe precisa ser modificada para suportar novos tipos

// A classe possui mais de uma responsabilidade:
// 1) decidir qual tipo de notificação usar
// 2) executar o envio da mensagem

// A lógica de criação dos objetos está misturada
// com a regra de negócio (envio da notificação)
