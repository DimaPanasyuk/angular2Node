import { RouterConfig, provideRouter } from '@angular/router';
import { MailsComponent } from '../mails/mails.component';
import { DeletedMailsComponent } from '../deleted/deleted.component';
import { NewEmailComponent } from '../new/new.component';

export const routes: RouterConfig = [
  {path: '', component: MailsComponent},
  {path: 'boxes/:id', component: MailsComponent},
  {path: 'deleted', component: DeletedMailsComponent},
  {path: 'new', component: NewEmailComponent}
]

export const APP_ROUTES_CONFIG = [
  provideRouter(routes)
]