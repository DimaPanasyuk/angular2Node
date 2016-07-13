"use strict";
var Letter = (function () {
    function Letter(title, body, sender, date, selected) {
        this.title = title;
        this.body = body;
        this.sender = sender;
        this.date = date;
        this.selected = selected;
    }
    return Letter;
}());
exports.Letter = Letter;
