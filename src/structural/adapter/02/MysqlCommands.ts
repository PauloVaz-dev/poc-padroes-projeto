import { IDbAdapter } from "./IDbAdapter";

export class MysqlCommands implements IDbAdapter {
    insert(): void {
        console.log('insert from mysql')
    }
    update(): void {
        console.log('update from mysql')
    }
    delete(id: string): void {
        console.log('delete from mysql')
    }

}