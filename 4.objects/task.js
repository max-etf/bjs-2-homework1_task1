function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
/* 
внимание вопрос: в презенташке именно такой вариант помечен как "полезно при ДЗ" - почему он не работает ?
return {
  name: name,
  gender: gender,
  age: age
} */
}

Student.prototype.setSubject = function (subjectName) {
 this.subject = subjectName;//ваш код
}

let st1 = new Student('vasya','male',25);
let st2 = new Student('vasya1','male',25);
let st3 = new Student('vasya2','male',25);

st1.setSubject("fckng_serious?");

Student.prototype.addMark = function (mark) {
  if(!this?.marks)
 /*  if(this.marks === undefined) */{ 
      this.marks = [mark];// добавить первую оценку 
    } else {
      this.marks.push(mark);// добавить вторую и последующие оценки в массив
    };//ваш код
 }

 Student.prototype.addMarks = function (...marks) {
  /* if(this?.marks) */
  if(!this?.marks){ 
      this.marks = [].concat(marks)
      // добавить первую оценку 
    } else {
      this.marks = this.marks.concat(marks);// добавить вторую и последующие оценки в массив
    };//ваш код
 }

 Student.prototype.getAverage = function () {
  if(!this?.marks) {
   return null;
  }
  else {
    return (this.marks.reduce((previous,next) => previous+next))/(this.marks.length);
    
  }
 }

 Student.prototype.exclude = function(reason) {
   delete this.subject;
   delete this.marks;
   this.excluded = reason;
 }



/* function User(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}
  User.prototype.getFullName = function () {
      console.log("Полное имя: " + this.name + " " + this.lastName);
    }
    const user1 = new User("Иван", "Иванович");
    const user2 = new User("Петр", "Пустота");
    console.log(user1.name); // Иванconsole.log(user2.name); // Петрuser1.getFullName();
    user1.getFullName(); */
// ваш код для остальных методов