import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Applepay } from './applepay/applepay';

export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {path:'applepay',component:Applepay},



];
