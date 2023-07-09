export interface IDbAdapter {
    insert(): void
    update(): void
    delete(id: string): void
}