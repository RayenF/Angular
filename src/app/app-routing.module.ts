import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'welcome', component: AddOrEditFilmComponent, children: [

  ] },
  { path: 'second', children: [
    { path: '', component: AppComponent, },
  
  ] },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }