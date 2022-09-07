var Student = /** @class */ (function () {
    function Student(fullname, passport) {
        this.fullname = fullname;
        this.passport = passport;
    }
    Student.prototype.dispDetails = function () {
        console.log("Name:".concat(this.fullname, " | this.passport:").concat(this.passport));
    };
    return Student;
}());
var stu1 = new Student("vartika saxena", 123);
stu1.dispDetails();
var Teacher = /** @class */ (function () {
    function Teacher(fn, sub) {
        this.fn = fn;
        this.sub = sub;
        this.fullname = fn;
        this.subjects = sub;
    }
    return Teacher;
}());
var t1 = new Teacher("vartika", ["flutter", "java"]);
console.log("Teacher Name:".concat(t1.fullname, " | Subject teach:").concat(t1.subjects));
