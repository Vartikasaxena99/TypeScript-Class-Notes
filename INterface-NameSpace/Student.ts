namespace StudentNS
{
    export interface StudentInt
    {
        fullname:string
        passport:number
        dispDetails():void
    }
    
    export class Student implements StudentInt
    {
        constructor(public fullname:string,public passport:number){ }
        dispDetails(): void {
            console.log(`Name:${this.fullname} | this.passport:${this.passport}`);
        }
    }
    
}