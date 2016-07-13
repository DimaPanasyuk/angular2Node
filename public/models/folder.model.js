"use strict";
var IFolder = (function () {
    function IFolder() {
    }
    return IFolder;
}());
exports.IFolder = IFolder;
var Folder = (function () {
    function Folder(id, name, letters) {
        this.id = id;
        this.name = name;
        this.letters = letters;
    }
    return Folder;
}());
exports.Folder = Folder;
