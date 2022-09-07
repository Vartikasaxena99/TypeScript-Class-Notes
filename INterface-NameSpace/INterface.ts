//namespace is used to seprate the code

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
namespace TeacherNS
{
    export interface TeacherInt
    {
        fullname:String
        subjects:string[]
    }
    export class Teacher implements TeacherInt{
        fullname:String
        subjects:string[]
        constructor(public fn:String,public sub:string[])
        {
            this.fullname=fn
            this.subjects=sub
        }
    }
}

///<reference path="Sudent.ts/">
///<reference path="Teacher.ts/">
let stu1:StudentNS.StudentInt=new StudentNS.Student("vartika saxena",123,)
stu1.dispDetails()

let t1=new TeacherNS.Teacher("vartika",["flutter","java"])
console.log(`Teacher Name:${t1.fullname} | Subject teach:${t1.subjects}`)
