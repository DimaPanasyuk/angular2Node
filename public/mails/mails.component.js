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
var mails_service_1 = require('./mails.service');
var folders_service_1 = require('../folders/folders.service');
var orderBy_pipe_1 = require('../shared/pipes/orderBy.pipe');
var _ = require('lodash');
var MailsComponent = (function () {
    function MailsComponent(route, foldersService, mailsService) {
        this.route = route;
        this.foldersService = foldersService;
        this.mailsService = mailsService;
        this.sortType = 'date';
        this.selectedAll = false;
        this.selectedLetters = [];
        this.folder = {
            name: '',
            id: null,
            letters: null,
            tag: null
        };
        this.folderToMove = {
            name: '',
            id: null,
            letters: null,
            tag: null
        };
    }
    MailsComponent.prototype.ngOnInit = function () {
        this.getMails();
    };
    MailsComponent.prototype.getMails = function () {
        var _this = this;
        var that = this;
        this.route.params.subscribe(function (params) {
            _this.mailsService.getMails(params['id'], _this.sortType)
                .then(function (res) {
                that.folder = res.folder;
                that.pageTitle = that.folder.name;
                that.lettersAmount = that.folder.letters.length;
            });
        });
    };
    MailsComponent.prototype.setOrderBy = function (type) {
        this.sortType = type;
        this.getMails();
    };
    MailsComponent.prototype.toggleSelectAll = function () {
        var _this = this;
        if (this.selectedAll) {
            this.selectedLetters = [];
            this.folder.letters.forEach(function (letter) {
                letter.selected = false;
            });
            this.selectedAll = false;
        }
        else {
            this.folder.letters.forEach(function (letter) {
                letter.selected = true;
                _this.selectedLetters.push(letter);
            });
            this.selectedAll = true;
        }
    };
    MailsComponent.prototype.selectFolderToMove = function (folder) {
        this.folderToMove = folder;
    };
    MailsComponent.prototype.toggleSelectedLetter = function (letter) {
        var letterSelected = _.find(this.selectedLetters, { id: letter.id });
        var notSelectedLetter;
        letter.selected = !letter.selected;
        notSelectedLetter = _.find(this.folder.letters, { selected: false });
        if (!notSelectedLetter) {
            this.selectedAll = true;
        }
        else {
            this.selectedAll = false;
        }
        if (letterSelected) {
            _.remove(this.selectedLetters, { id: letter.id });
        }
        else {
            this.selectedLetters.push(letter);
        }
    };
    MailsComponent.prototype.moveSelectedMails = function () {
        var _this = this;
        this.foldersService.getFolders()
            .then(function (res) {
            _this.foldersToMove = res;
        });
    };
    MailsComponent.prototype.approveMovement = function () {
        console.log(this.selectedLetters.length + " will be moved to " + this.folderToMove.name + " folder!");
    };
    MailsComponent.prototype.moveToTrash = function () {
        console.log(this.selectedLetters.length + " will be moved to trash!");
    };
    MailsComponent = __decorate([
        core_1.Component({
            selector: 'mails',
            templateUrl: 'public/mails/mails.component.html',
            pipes: [orderBy_pipe_1.OrderByPipe]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, folders_service_1.FoldersService, mails_service_1.MailsService])
    ], MailsComponent);
    return MailsComponent;
}());
exports.MailsComponent = MailsComponent;
