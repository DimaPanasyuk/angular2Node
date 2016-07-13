"use strict";
var IFolder = (function () {
    function IFolder() {
    }
    return IFolder;
}());
exports.IFolder = IFolder;
var Folder = (function () {
    function Folder(id, name, letters, tag) {
        this.id = id;
        this.name = name;
        this.letters = letters;
        this.tag = tag;
    }
    return Folder;
}());
exports.Folder = Folder;
