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
var activeFolder_service_1 = require('../shared/activeFolder.service');
var orderBy_pipe_1 = require('../shared/pipes/orderBy.pipe');
var _ = require('lodash');
var MailsComponent = (function () {
    function MailsComponent(route, mailsService, activeFolderService) {
        this.route = route;
        this.mailsService = mailsService;
        this.activeFolderService = activeFolderService;
        this.sortOrder = 'date';
        this.selectedAll = false;
        this.selectedLetters = [];
        this.folder = {
            name: null,
            id: null,
            letters: null
        };
    }
    MailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.route.params.subscribe(function (params) {
            _this.mailsService.getMails(params['id'])
                .then(function (res) {
                that.folder = res.folder;
                that.activeFolderService.setActiveFolder(that.folder.name);
                that.pageTitle = that.folder.name;
                that.lettersAmount = that.folder.letters.length;
            });
        });
    };
    MailsComponent.prototype.setOrderBy = function (type) {
        this.sortOrder = type;
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
    MailsComponent = __decorate([
        core_1.Component({
            selector: 'mails',
            templateUrl: 'public/mails/mails.component.html',
            pipes: [orderBy_pipe_1.OrderByPipe]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, mails_service_1.MailsService, activeFolder_service_1.ActiveFolderService])
    ], MailsComponent);
    return MailsComponent;
}());
exports.MailsComponent = MailsComponent;
