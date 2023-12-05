export { }

type objectWithTeam = {
    team: string
}

type Programmer = objectWithTeam & {
    name: string,
    language: string
}

// bounded generic, here we can extend the T generic
// with the property(s) in the objectWithTeam type
function updateTeam<T extends objectWithTeam>(arg: T, newTeam: string): T{
    arg.team = newTeam;
    return arg;
}

let empl1: Programmer = {
    name: 'John',
    language: 'C#',
    team: 'CoolTeam'
}
updateTeam(empl1, 'SuperCoolTeam')

type OldSchoolProgrammer<T extends 'Basic' | 'Lisp' = 'Basic'> = {
    language: T,
    name: string
}

const myCoolColleague: OldSchoolProgrammer = {
    language: 'Basic',
    name: 'John'
}