import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesModule } from './features/features.module';
import { DefaultServiceService } from './core/services/default-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule
  ],
  providers: [
    DefaultServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
