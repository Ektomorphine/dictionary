import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header.component';
import { SidebarComponent } from './sidebar-component/sidebar.component';
import { WordsComponent } from './words-component/words.component';

import { HttpService } from './service/service.component';

const appRoutes: Routes =[
  { path: 'words', component: WordsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    WordsComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  bootstrap: [ AppComponent ],
  providers: [ HttpService ]
})
export class AppModule {
}
