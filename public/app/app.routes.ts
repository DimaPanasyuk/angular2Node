import { RouterConfig, provideRouter } from '@angular/router';
import { MailsComponent } from '../mails/mails.component';
import { NewEmailComponent } from '../new/new.component';
import { LetterComponent } from '../letter/letter.component';
import { ManagementComponent } from '../management/management.component';

export const routes: RouterConfig = [
  {path: 'boxes/:id', component: MailsComponent},
  {path: 'new', component: NewEmailComponent},
  {path: 'letters/:id', component: LetterComponent},
  {path: 'management', component: ManagementComponent}
]

export const APP_ROUTES_CONFIG = [
  provideRouter(routes)
]