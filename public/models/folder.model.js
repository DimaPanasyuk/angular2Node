"use strict";
var IFolder = (function () {
    function IFolder() {
    }
    return IFolder;
}());
exports.IFolder = IFolder;
var Folder = (function () {
    function Folder(_id, name, letters, immutable, tag) {
        this._id = _id;
        this.name = name;
        this.letters = letters;
        this.immutable = immutable;
        this.tag = tag;
    }
    return Folder;
}());
exports.Folder = Folder;
