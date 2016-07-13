"use strict";
var User = (function () {
    function User(id, name, surname, age) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    return User;
}());
exports.User = User;
