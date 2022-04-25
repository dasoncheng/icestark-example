import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidentComponent } from './pages/resident/resident.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { SettingComponent } from './pages/setting/setting.component';
import { NavComponent } from './widgets/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidentComponent,
    EquipmentComponent,
    SettingComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
