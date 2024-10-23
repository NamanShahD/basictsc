// let person = {
//     age : 19,
//     name : "rajesh",
//     subject : "English"
// }
type Person = {
    age : number,
    name : string,
    subject:string
}
// let employee = {
//     workex : 3,
//     company : "hcl",
//     eid:3
// }
type Employee = {
    workex:number,
    company:string,
    eid:number
}
type Manager = Employee & Person
// const manager:Manager{
//     workex:23,
// }
// isCompany()