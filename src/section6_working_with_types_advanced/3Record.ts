export { }

type Employee = {
    name: string,
    position: string,
    [key: string]: string | number // example of index signature
}

const john: Employee = {
    name: 'John',
    position: 'programmer',
    // extend the object?
    email: 'john@company.com',
    age: 30
}

// type EmployeeDictionary = {
//     [id: string]: Employee
// }

const employeesRecords: Record<string, Employee> = {
    abc: john
}

const myEmployee = employeesRecords['abc']

// we get type safety for combining types:

type Positions = 'Programmer' | 'Manager' | 'HR' | 'Scrum Master'

type PositionsSalaries = Record<Positions, { salary: number }>

const salaries: PositionsSalaries = { // each of the four positions are required to be in this object
    Programmer: {
        salary: 100000
    },
    HR: {
        salary: 100000
    },
    Manager: {
        salary: 100000
    },
    'Scrum Master': {
        salary: 100000
    }
} 