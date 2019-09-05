import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './modules/timer/timer.component';
import { TestComponent } from './modules/timer_rxjs/test.component';
import {AgeToSecondsComponent} from './modules/age-to-seconds/age-to-seconds.component';
import {EncryptionAndDecriptionComponent} from './modules/encryption-and-decription/encryption-and-decription.component';
import {FizzBuzzComponent} from './modules/fizz-buzz/fizz-buzz.component';
import {HeaderComponent} from './modules/header/header.component';
import {HigherLowerComponent} from './modules/higher-lower/higher-lower.component';
import {LoveCalcComponent} from './modules/love-calc/love-calc.component';
import {NameGeneratorComponent} from './modules/name-generator/name-generator.component';
import {RockPaperScessorsComponent} from './modules/rock-paper-scessors/rock-paper-scessors.component';
import {TemperatureConverterComponent} from './modules/temperature-converter/temperature-converter.component';
import {HomeComponent} from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TestComponent,
    AgeToSecondsComponent,
    EncryptionAndDecriptionComponent,
    FizzBuzzComponent,
    HeaderComponent,
    HigherLowerComponent,
    LoveCalcComponent,
    NameGeneratorComponent,
    RockPaperScessorsComponent,
    TemperatureConverterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
