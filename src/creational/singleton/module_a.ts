import { MyDatabaseClassic } from './db/my-database-classic';

const myDb = MyDatabaseClassic.instance;
myDb.addUser({ name: 'Alice', age: 30 });
myDb.addUser({ name: 'Bob', age: 25 });
myDb.showUsers();
