import { NgModule, ErrorHandler, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NewpagePage } from '../pages/newpage/newpage';
import { ZiyaPage } from '../pages/Ziya/Ziya';

import { NavController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from "@angular/http";
import { JsonpModule } from "@angular/http";
import { Headers} from "@angular/http";
import { ReleasePage } from '../pages/release/release';
import { MessagePage } from '../pages/message/message';
import { Message1Page } from '../pages/message1/message1';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewpagePage,
    ZiyaPage,
    ReleasePage,
    MessagePage,
    Message1Page,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnNewpagePages:true,
      backButtonText:''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewpagePage,
    ZiyaPage,
    ReleasePage,
    MessagePage,
    Message1Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,

   
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ] 

})
export class AppModule {}