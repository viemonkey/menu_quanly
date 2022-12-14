export interface Imanagement<T> {
    add(t: T): void;

    remove(id: number): void;

    edit(id: number, t: T): void;

    findAll(): T[];

}