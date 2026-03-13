interface Notification {
  send(message: string): void;
}

class EmailNotification implements Notification {
  send(message: string): void {
    console.log('Sending EMAIL:', message);
  }
}

class SMSNotification implements Notification {
  send(message: string): void {
    console.log('Sending SMS:', message);
  }
}

abstract class NotificationFactory {
  abstract createNotification(): Notification;

  send(message: string) {
    const notification = this.createNotification();
    notification.send(message);
  }
}

class EmailNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}

class SMSNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SMSNotification();
  }
}

const factory = new EmailNotificationFactory();
factory.send('Hello!');
