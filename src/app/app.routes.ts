import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserTableComponent } from './user-table/user-table.component';

export const routes: Routes = [
  { path: '', component: UserFormComponent },
  { path: 'details', component: UserTableComponent },
  { path: '**', redirectTo: '' }
];