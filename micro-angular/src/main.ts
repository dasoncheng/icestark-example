import { enableProdMode, type NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import './utils/micro';

if (environment.production) {
  enableProdMode();
}

let app: void | NgModuleRef<AppModule>;

async function application() {
  app = await platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

if (!environment.micro.on()) {
  application();
}
// 导出生命周期函数
export async function mount() {
  console.log('module-angular: mount');
  application();
}

export function unmount() {
  console.log('module-angular: unmount');
  app?.destroy();
}
