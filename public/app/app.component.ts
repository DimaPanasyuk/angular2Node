import { Component } from '@angular/core';
import { UsersComponent } from '../users/users.component';


@Component({
    selector: 'app',
    templateUrl: '/public/app/app.component.html',
    directives: [UsersComponent]
})
export class AppComponent { }
