"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var FoldersService = (function () {
    function FoldersService(http) {
        this.http = http;
    }
    FoldersService.prototype.getFolders = function () {
        var url = "api/folders";
        return this.http.get(url)
            .toPromise()
            .then(this.handleResponse);
    };
    FoldersService.prototype.handleResponse = function (response) {
        var folders = response.json().folders;
        return folders;
    };
    FoldersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FoldersService);
    return FoldersService;
}());
exports.FoldersService = FoldersService;
