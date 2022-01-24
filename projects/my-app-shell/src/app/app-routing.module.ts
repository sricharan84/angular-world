import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'contact-page', pathMatch: 'full'},
  { path: 'about-page', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'contact-page', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
