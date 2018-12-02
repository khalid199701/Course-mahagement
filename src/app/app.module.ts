import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContentareaComponent } from './contentarea/contentarea.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SubjectComponent } from './subject/subject.component';
import { DataService } from './data.service';
import { TecherComponent } from './techer/techer.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContentareaComponent,
    FooterComponent,
    AboutComponent,
    SubjectComponent,
    TecherComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'about',
        component:AboutComponent
      },
      {
        path: 'subject',
        component: SubjectComponent 
      },
      {
        path: 'teacher',
        component: TecherComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path:'',
        component:ContentareaComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
