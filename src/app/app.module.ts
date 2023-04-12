import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AiswaryaComponent } from './aiswarya/aiswarya.component';
import { InstagramComponent } from './instagram/instagram.component';
import { LinkedInComponent } from './linked-in/linked-in.component';
import { GitHubComponent } from './git-hub/git-hub.component';
import { Routes } from '@angular/router';
import { RouterModule} from '@angular/router'


const appRoute: Routes= [
  {path:'',redirectTo: 'Aiswarya',pathMatch: 'full'},
  {path: 'Aiswarya', component:AiswaryaComponent},
  {path: 'Instagram', component:InstagramComponent},
  {path: 'LinkedIn', component:LinkedInComponent},
  {path: 'GitHub', component:GitHubComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AiswaryaComponent,
    InstagramComponent,
    LinkedInComponent,
    GitHubComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  exports: [
    RouterModule
  ],
})

export class AppModule { }
