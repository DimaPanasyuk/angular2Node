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
var NewEmailComponent = (function () {
    function NewEmailComponent() {
        this.newLetter = {
            id: Math.round((Math.random() * 100)),
            title: '',
            body: '',
            date: new Date().getTime(),
            sender: null,
            selected: false
        };
    }
    NewEmailComponent.prototype.ngOnInit = function () {
        console.log('yep new mail!');
    };
    NewEmailComponent = __decorate([
        core_1.Component({
            selector: 'new-email',
            templateUrl: 'public/new/new.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NewEmailComponent);
    return NewEmailComponent;
}());
exports.NewEmailComponent = NewEmailComponent;
