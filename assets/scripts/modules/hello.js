/*jshint node:true*/

'use strict';

// This contains some example ES6 code

var log = msg => console.log(msg);

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name() {
    return this.firstName + ' ' + this.lastName;
  }

  toString() {
    return this.name;
  }
}

let me = new Person('TJ', 'Fogarty');

log('Hello, ' + me.toString() + ' from hello.js!');