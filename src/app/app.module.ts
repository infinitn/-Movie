import {ErrorHandler, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";

import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";
import {HomePage} from "../pages/home/home";
import {TabsPage} from "../pages/tabs/tabs";

import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {SettingPage} from "../pages/setting/setting";
import {LoginPage} from "../pages/login/login";
import {TaopiaopiaoPage} from "../pages/taopiaopiao/taopiaopiao";
import {SignupPage} from "../pages/signup/signup";
import {ForgetPage} from "../pages/forget/forget";
import {HttpModule} from "@angular/http";
import {UserService} from "./user.service";
import {MovieDetailPage} from "../pages/movie-detail/movie-detail";
import {MovieItemPage} from "../pages/movie-item/movie-item";
import {MovieListPage} from "../pages/movie-list/movie-list";

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
    MovieItemPage,
    MovieListPage
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
    MovieItemPage,
    MovieListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]

})
export class AppModule {}
