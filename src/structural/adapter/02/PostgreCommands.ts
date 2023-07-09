import { IDbAdapter } from "./IDbAdapter";

export class PostgreCommands   {
    insertPostgre(): void {
        console.log('insert from postgre')
    }
    updatePostgre(): void {
        console.log('update from postgre')
    }
    deletePostgre(id: string): void {
        console.log('delete from postgre')
    }

}