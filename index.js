//namespace is used to seprate the code
var StudentNS;
(function (StudentNS) {
    class Student {
        constructor(fullname, passport) {
            this.fullname = fullname;
            this.passport = passport;
        }
        dispDetails() {
            console.log(`Name:${this.fullname} | this.passport:${this.passport}`);
        }
    }
    StudentNS.Student = Student;
})(StudentNS || (StudentNS = {}));
var TeacherNS;
(function (TeacherNS) {
    class Teacher {
        constructor(fn, sub) {
            this.fn = fn;
            this.sub = sub;
            this.fullname = fn;
            this.subjects = sub;
        }
    }
    TeacherNS.Teacher = Teacher;
})(TeacherNS || (TeacherNS = {}));
///<reference path="Sudent.ts/">
///<reference path="Teacher.ts/">
let stu1 = new StudentNS.Student("vartika saxena", 123);
stu1.dispDetails();
let t1 = new TeacherNS.Teacher("vartika", ["flutter", "java"]);
console.log(`Teacher Name:${t1.fullname} | Subject teach:${t1.subjects}`);
