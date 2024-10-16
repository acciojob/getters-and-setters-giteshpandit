// Class Person
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }

  // Optional: Getter for age (in case you want to log it later)
  get age() {
    return this._age;
  }
}

// Class Student extends Person
class Student extends Person {
  // Method specific to Student
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Class Teacher extends Person
class Teacher extends Person {
  // Method specific to Teacher
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

// Example usage:
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
