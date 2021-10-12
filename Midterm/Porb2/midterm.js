class Student {
    constructor(name = 'Unknow', nameth = 'Unknow' , id = 'Unknow'){
        this.id = id;
        this.name = name;
        this.nameth = nameth;
        this.semesters = [];

    }
    calculateGPAX() {
        let gpax = GradeScore/AllUnitCalculated
        this.allSemester.Gpax = gpax;
        return gpax;
    }
    checkStatus() {
        return status;
    }
    Addgrade(semester,grade){
        semesters[semester].grade = grade
    }
}

class Semester {
    constructor(no , ){

    }
}
class Subject {
    constructor(code = 'Unknown' , name = 'Unknown' , unit , grade = ''){
        this.code = code;
        this.name = name;
        this.unit = unit;
        this.grade = grade;
    }

}
const GradeScore = {
    "A" : 4,"B+" : 3.5,"B" : 3 ,"C+" :  2.5 ,"C" : 2,"D+" : 1.5,"D" : 1,"F" : 0,"Fa" : 0,"Fe" : 0,"W" : 0,
}

function addSubject(student , semester , subject){
    student.semesters[semester] = subject;
}

let nut = new Student("Chotiwit", "โชติวิทย์" , 63130500026);
let int101 = new Subject("INT101" , "ROGRAMMING FUNDAMENTALS" ,3);
let int102 = new Subject("INT102" , "WEB TECHNOLOGY" ,1);
let int100 = new Subject("INT100" , "INFORMATION TECHNOLOGY FUNDAMENTALS" ,3);
let int114 = new Subject("INT114" , "DISCRETE MATHEMATICS FOR INFORMATION TECHNOLOGY" ,3);
let lng220 = new Subject("LNG220" , "ACADEMIC ENGLISHl" ,3);
let gen121 = new Subject("GEN121" , "LEARNING AND PROBLEM SOLVING SKILLS" ,3);
let gen101 = new Subject("GEN101", "PHYSICAL EDUCATION", 1)


addSubject(nut,1,int100);

console.log(nut);