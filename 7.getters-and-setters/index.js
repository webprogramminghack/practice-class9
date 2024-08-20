'use strict';

{
  let employee = {
    firstName: 'John',
    lastName: 'Doe',

    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  // console.log(employee.fullName());
}

{
  let employee = {
    firstName: 'John',
    lastName: 'Doe',

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
      [this.firstName, this.lastName] = value.split(' ');
    },
  };

  // console.log(employee.fullName);

  employee.fullName = 'Jane Smith';
  // console.log(employee.fullName);
}

{
  let employee = {
    firstName: 'John',
    lastName: 'Doe',
    _age: 30, // properti internal

    get age() {
      return this._age;
    },

    set age(value) {
      if (value < 0) {
        console.log('Age cannot be negative!');
      } else {
        this._age = value;
      }
    },
  };

  employee.age = -5;

  employee.age = 35;

  console.log(employee.age);
}
