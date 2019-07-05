import { Component } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { AlertService } from './providers/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [];
  constructor(
    public electronService: ElectronService,
    private alertService: AlertService,
    private translate: TranslateService
  ) {

    translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }
  async alertStart() {
    this.items = null;
    try {
      const rs: any = await this.alertService.alertStart();
      if (rs.info.length > 0) {
        this.items = rs.info;
        console.log(this.items);
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  }

}
