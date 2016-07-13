import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { APP_ROUTES_CONFIG } from './app/app.routes';

import { FoldersService } from './folders/folders.service';
import { MailsService } from './mails/mails.service';

import 'rxjs/add/operator/toPromise';

import { AppComponent } from './app/app.component';

bootstrap(AppComponent, [
  ROUTER_DIRECTIVES,
  APP_ROUTES_CONFIG,
  HTTP_PROVIDERS,
  FoldersService,
  MailsService
]);
