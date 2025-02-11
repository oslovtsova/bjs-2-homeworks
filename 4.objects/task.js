function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let student1 = new Student("Иван", "мужской", 19);
let student2 = new Student("Мария", "женский", 20);
let student3 = new Student("Василий", "мужской", 18);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	(this.marks === undefined) ? this.marks = [...marks]: this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
	if (this.marks === undefined) {
		return '0'
	} else {
		this.marks.forEach(item => sum += item);
		return sum / this.marks.length
	}
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}
