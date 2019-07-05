import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(
    private httpClient: HttpClient) { }

  async info() {
    console.log('xxxx');
    const _url = `${AppConfig.environment}/info`;
    return this.httpClient.get(_url).toPromise();
  }

  async alertStart() {
    const _url = `${AppConfig.environment}/alertStart`;
    return this.httpClient.get(_url).toPromise();
  }

  async alertStop() {
    const _url = `${AppConfig.environment}/alertStop`;
    return this.httpClient.get(_url).toPromise();
  }

  async insert(info: object) {
    const _url = `${AppConfig.environment}/insert`;
    return this.httpClient.post(_url, info).toPromise();
  }

  async update(alertId: any, info: object) {
    const _url = `${AppConfig.environment}/update/${alertId}`;
    return this.httpClient.put(_url, info).toPromise();
  }

  async remove(alertId: any) {
    const _url = `${AppConfig.environment}/remove/${alertId}`;
    return this.httpClient.delete(_url).toPromise();
  }

}
