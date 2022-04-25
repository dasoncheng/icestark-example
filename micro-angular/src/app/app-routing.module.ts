import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

import { EquipmentComponent } from './pages/equipment/equipment.component';
import { ResidentComponent } from './pages/resident/resident.component';
import { SettingComponent } from './pages/setting/setting.component';

const routes: Routes = [
  {
    path: 'resident',
    component: ResidentComponent,
  },
  {
    path: 'equipment',
    component: EquipmentComponent,
  },
  {
    path: 'setting',
    component: SettingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: environment.micro.on() ? environment.micro.base() : '/',
    },
  ],
})
export class AppRoutingModule {}
