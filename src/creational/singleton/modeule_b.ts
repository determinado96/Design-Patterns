import { MyDatabaseClassic } from './db/my-database-classic';
import './module_a';

const myDb = MyDatabaseClassic.instance;
myDb.addUser({ name: 'Mike', age: 30 });
myDb.showUsers();
