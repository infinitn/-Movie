import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SettingPage} from "../pages/setting/setting";
import {LoginPage} from "../pages/login/login";
import {TaopiaopiaoPage} from "../pages/taopiaopiao/taopiaopiao";
import {SignupPage} from "../pages/signup/signup";
import {ForgetPage} from "../pages/forget/forget";
import {HttpModule} from "@angular/http";
import {UserService} from "./user.service";
import {MovieDetailPage} from "../pages/movie-detail/movie-detail";
import {BianjiPage} from "../pages/bianji/bianji";
import {FankuiPage} from "../pages/fankui/fankui";
import {MytopicPage} from "../pages/mytopic/mytopic";
import {MymessagePage} from "../pages/mymessage/mymessage";
import {MyarticlePage} from "../pages/myarticle/myarticle";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingPage,
    LoginPage,
    TaopiaopiaoPage,
    SignupPage,
    ForgetPage,
    MovieDetailPage,
    BianjiPage,
    FankuiPage,
    MytopicPage,
    MymessagePage,
    MyarticlePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingPage,
    LoginPage,
    TaopiaopiaoPage,
    SignupPage,
    ForgetPage,
    MovieDetailPage,
    BianjiPage,
    FankuiPage,
    MytopicPage,
    MymessagePage,
    MyarticlePage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
