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
