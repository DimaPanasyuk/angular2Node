"use strict";
var router_1 = require('@angular/router');
var mails_component_1 = require('../mails/mails.component');
var deleted_component_1 = require('../deleted/deleted.component');
var new_component_1 = require('../new/new.component');
var letter_component_1 = require('../letter/letter.component');
exports.routes = [
    { path: '', component: mails_component_1.MailsComponent },
    { path: 'boxes/:id', component: mails_component_1.MailsComponent },
    { path: 'deleted', component: deleted_component_1.DeletedMailsComponent },
    { path: 'new', component: new_component_1.NewEmailComponent },
    { path: 'letters/:id', component: letter_component_1.LetterComponent }
];
exports.APP_ROUTES_CONFIG = [
    router_1.provideRouter(exports.routes)
];
