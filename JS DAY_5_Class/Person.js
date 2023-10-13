class Person {
    constructor(firstName, lastName, age, gender, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getGender() {
      return this.gender;
    }
  
    getEmail() {
      return this.email;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    setEmail(email) {
      this.email = email;
    }
  }