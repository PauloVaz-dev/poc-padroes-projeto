import { IDbAdapter } from "./IDbAdapter";
import { MysqlCommands } from "./MysqlCommands";

export class MysqlCommandsAdapter implements IDbAdapter {
    constructor(readonly mysql: MysqlCommands){}
    insert(): void {
        this.mysql.insert()
    }
    update(): void {
        this.mysql.update()
    }
    delete(id: string): void {
        this.mysql.delete(id)
    }

}