import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { MyToolbarComponent } from './my-toolbar/my-toolbar.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstTabComponent } from './tab-menu/first-tab/first-tab.component';
import { SecondTabComponent } from './tab-menu/second-tab/second-tab.component';
import { ThirdTabComponent } from './tab-menu/third-tab/third-tab.component';

const appRoutes: Routes = [
  {path: 'menu1', component: Menu1Component},
  {path: 'menu2', component: Menu2Component},
  {path: 'tab-menu', component: TabMenuComponent},
  {path: '', redirectTo: 'menu1', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyToolbarComponent,
    Menu1Component,
    Menu2Component,
    PageNotFoundComponent,
    TabMenuComponent,
    FirstTabComponent,
    SecondTabComponent,
    ThirdTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
