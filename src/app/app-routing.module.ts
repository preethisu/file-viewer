import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [ 
  {  path: 'uploadFile', component : UploadFileComponent},
  {  path: '' , component : HomeComponent}
  //{path: '**', redirectTo: '/' + AppConfig.routes.error404}
];
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log("Routing");
  }
 }
 