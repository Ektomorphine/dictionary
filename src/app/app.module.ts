import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header-component/header.component';
import { SidebarComponent } from './components/sidebar-component/sidebar.component';
import { WordsPage } from './pages/words-page/words.page';
import { HomePage } from './pages/home-page/home.page';
import { ListPage } from './pages/list-page/list.page';
import { TestPage } from './pages/test-page/test.page';

import { WordService } from './services/word.service';
import { CanDeactivateGuard } from './services/guard.service';

const appRoutes: Routes = [
  { path: 'words', component: WordsPage, canDeactivate: [CanDeactivateGuard] },
  { path: '', component: HomePage },
  { path: 'list', component: ListPage },
  { path: 'test', component: TestPage }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    WordsPage,
    HomePage,
    ListPage,
    TestPage

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [ AppComponent ],
  providers: [ WordService, CanDeactivateGuard ]
})
export class AppModule {
}
