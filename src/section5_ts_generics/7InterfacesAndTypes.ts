export {}

interface DoubleArray<T,R> {
    array1: Array<T>,
    array2: Array<R>
}

type Programmer = {}
type Manager = {}

const employees: DoubleArray<Programmer, Manager> = {
    array1: [],
    array2: []
}

// a contract for a class (as an example)
interface IMemoryDataBase <T> {
    addItem(item: T): void
    getItemByIndex(index: number): T | undefined
    listItems(): void
}
