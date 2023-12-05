export {}

// Contract between function arguments and returned values types

// Dump requirement: Build a function that wraps it's argument into an array
function toArrayz(arg: any){
    return [arg]
}

// missing correct type annotation
const myArray = toArrayz('My name'); 

// here we have functions that accept type arguments
function toArrayFromString(arg: string){
    return [arg]
}

function toArrayFromNumber(arg: number){
    return [arg]
}

function toArrayFromBoolean(arg: boolean){
    return [arg]
}


// a generic function that implements the above for any type, just as one function
function toArray<T>(arg: T):[T]{
    return [arg]
}

const myNameArray = toArray('Alex')




















