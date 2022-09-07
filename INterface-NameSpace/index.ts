
interface StudentInt
{
    fullname:string
    passport:number
    dispDetails():void
}

class Student implements StudentInt
{
    constructor(public fullname:string,public passport:number){ }
    dispDetails(): void {
        console.log(`Name:${this.fullname} | this.passport:${this.passport}`);
    }
}
let stu1:StudentInt=new Student("vartika saxena",123,)
stu1.dispDetails()


interface TeacherInt
{
    fullname:String
    subjects:string[]
}
class Teacher implements TeacherInt{
    fullname:String
    subjects:string[]
    constructor(public fn:String,public sub:string[])
    {
        this.fullname=fn
        this.subjects=sub
    }
}
let t1=new Teacher("vartika",["flutter","java"])
console.log(`Teacher Name:${t1.fullname} | Subject teach:${t1.subjects}`)

