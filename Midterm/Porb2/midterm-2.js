class Student{
    constructor(name = 'Unknown', sid = 'Unknown'){
        this._name = name;
        this._sid = sid;
        this._allSemester = [];
        this._gpax = 0.00;
        this._status = '';
        this._allCredits = 0;
    }
}

class Semester{
    constructor(termNo){
        this._termNo = termNo;
        this._allSubject = [];
        this._gpa = 0.00;
        this._credits = 0;
    }
}

class Subject{
    constructor(name,desc,credit){
        this._name = name;
        this._desc = desc;
        this._credit = credit;
    }
}

let nut = new Student("Chotiwit" , 63130500026);

let semester1 = new Semester(1);
