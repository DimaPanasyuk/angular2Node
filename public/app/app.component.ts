import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FoldersComponent } from '../folders/folders.component';

@Component({
    selector: 'app',
    templateUrl: '/public/app/app.component.html',
    directives: [FoldersComponent, ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit{ 
    selectedAll: boolean = false;

    toggleSelectAll(): void {
        this.selectedAll = !this.selectedAll;
    }

    ngOnInit(): void {
        
    }
}
