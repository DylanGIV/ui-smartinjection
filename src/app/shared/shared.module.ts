import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegSidebarComponent } from './reg-sidebar/reg-sidebar.component';
import { WoSidebarComponent } from './wo-sidebar/wo-sidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RegSidebarComponent,
    WoSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RegSidebarComponent,
    WoSidebarComponent
  ]
})
export class SharedModule { }
