import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';


const routes: Routes = [
  { path: '', redirectTo: 'user-form', pathMatch: 'full' },
  { component: UserFormComponent, path: 'user-form' },
  { component: WelcomeComponent, path: 'welcome' },
  { component: ThankYouComponent, path: 'thank-you' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
