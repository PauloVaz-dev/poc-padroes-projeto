import { IDbAdapter } from "./IDbAdapter";
import { MysqlCommands } from "./MysqlCommands";
import { PostgreCommands } from "./PostgreCommands";

export class PostgreCommandsAdapter implements IDbAdapter {
    constructor(readonly mysql: PostgreCommands){}
    insert(): void {
        this.mysql.insertPostgre()
    }
    update(): void {
        this.mysql.updatePostgre()
    }
    delete(id: string): void {
        this.mysql.deletePostgre(id)
    }

}