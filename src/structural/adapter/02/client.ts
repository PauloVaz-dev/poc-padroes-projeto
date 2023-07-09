import { MysqlCommands } from "./MysqlCommands";
import { MysqlCommandsAdapter } from "./MysqlCommandsAdapter";
import { PostegreCommands } from "./PostgreCommands";

//Temos duas classes que tem interfaces diferents
const mysql = new MysqlCommands()
mysql.insert()

const postgre = new PostegreCommands()
postgre.insertPostgre()


const adapter = new MysqlCommandsAdapter(mysql)
adapter.insert()
