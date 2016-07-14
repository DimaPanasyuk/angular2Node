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
var router_1 = require('@angular/router');
var folders_service_1 = require('./folders.service');
var FoldersComponent = (function () {
    function FoldersComponent(router, foldersService) {
        this.router = router;
        this.foldersService = foldersService;
    }
    FoldersComponent.prototype.writeNewLetter = function () {
        this.setActiveFolder('new');
        this.router.navigate(['new']);
    };
    FoldersComponent.prototype.setActiveFolder = function (tabName) {
        this.activeFolder = tabName;
        sessionStorage.setItem('activeFolder', this.activeFolder);
    };
    FoldersComponent.prototype.showManagement = function () {
        this.setActiveFolder('management');
        this.router.navigate(['management']);
    };
    FoldersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeFolder = sessionStorage.getItem('activeFolder');
        this.foldersService.getFolders()
            .then(function (data) {
            _this.folders = data.folders;
        });
    };
    FoldersComponent.prototype.logOut = function () {
        console.log('Logged Out');
    };
    FoldersComponent = __decorate([
        core_1.Component({
            selector: 'folders',
            templateUrl: 'public/folders/folders.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, folders_service_1.FoldersService])
    ], FoldersComponent);
    return FoldersComponent;
}());
exports.FoldersComponent = FoldersComponent;
