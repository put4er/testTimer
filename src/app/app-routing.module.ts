import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AgeToSecondsComponent} from './modules/age-to-seconds/age-to-seconds.component';
import {EncryptionAndDecriptionComponent} from './modules/encryption-and-decription/encryption-and-decription.component';
import {FizzBuzzComponent} from './modules/fizz-buzz/fizz-buzz.component';
import {HigherLowerComponent} from './modules/higher-lower/higher-lower.component';
import {NameGeneratorComponent} from './modules/name-generator/name-generator.component';
import {RockPaperScessorsComponent} from './modules/rock-paper-scessors/rock-paper-scessors.component';
import {TemperatureConverterComponent} from './modules/temperature-converter/temperature-converter.component';
import {LoveCalcComponent} from './modules/love-calc/love-calc.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent },
  { path: 'products/age to seconds', component: AgeToSecondsComponent },
  { path: 'products/encryption and decription', component: EncryptionAndDecriptionComponent },
  { path: 'products/fizz buzz', component: FizzBuzzComponent },
  { path: 'products/higher or lower', component: HigherLowerComponent },
  { path: 'products/love calc', component: LoveCalcComponent },
  { path: 'products/name generator', component: NameGeneratorComponent },
  { path: 'products/rock paper scessors', component: RockPaperScessorsComponent },
  { path: 'products/temperature converter', component: TemperatureConverterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
