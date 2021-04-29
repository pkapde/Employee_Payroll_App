class EmployeePayrollData{

    get id() { 
        return this._id; 
    }

    set id(id) { 
        let idRegex = RegExp('[1-9]+[0-9]?');
        if (idRegex.test(id))
            this._id = id;
        else throw 'ID is incorrect'
    }

    get name() {
        return this._name;
    }

    set name(name) {
        console.log(name);
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(name)) 
            this._name=name;
        else throw "Name is Incorrect";
    }

    get picture() {
        return this._picture;
    }
    set picture(picture) {
        this._picture = picture;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        let date = new Date();
        if (startDate < date) {
            this._startDate = startDate;
        } else throw "Invalid Date";
    }

    get notes() {
        return this._notes;
    }

    set notes(notes) {
        this._notes = notes;
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocalDateString("en-US", options);
        return "id=" + this.id + ", _name=" + this.name + ", gender=" + this.gender + ", picture=" + this.picture + ", department=" + this.department +", salary=" + this.salary + ", empDate=" + this.startDate + ", notes=" + this.notes;
    }
} 