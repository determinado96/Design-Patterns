interface User {
  name: string;
  age: number;
}

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() { }

  public static get instance(): MyDatabaseClassic {
    if (this._instance === null) {
      this._instance = new MyDatabaseClassic();
    }

    return this._instance;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(name: string): void {
    this.users = this.users.filter(user => user.name !== name);
  }

  showUsers(): void {
    this.users.forEach(user => console.log(`Name: ${user.name}, Age: ${user.age}`));
  }
}
