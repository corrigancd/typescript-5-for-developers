export { }

type Employee = {
    name: string,
    salary: number
}

function hasBigSalary(empl: Employee) {
    return empl.salary > 50000
}

const john: Employee = {
    name: 'John',
    salary: 60000
}

const bonus = hasBigSalary(john) ? 2000 : 3000; // example of ternary operator

type Intern = {
    name: string,
    tasks: string[]
}

// ternary operator, if our type T contains salary field,
// then we return array of salary, otherwise never type
type SalaryOf<T> = T extends { salary: number } ? T['salary'] : never

let someSalary: SalaryOf<Employee>
let noSalary: SalaryOf<Intern>

type ArrayOfSalaries<T> =
    T extends Employee ? Array<T['salary']> :
    T extends number ? T[] : never

let employeesSalariesArray: ArrayOfSalaries<Employee>
let simpleSalariesArray: ArrayOfSalaries<number>
let noSalariesArray: ArrayOfSalaries<string>

// Distributive Conditional Types:
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;
const numberArray: StrArrOrNumArr = [1,2,3]
const shouldBeNumber = numberArray[0]







