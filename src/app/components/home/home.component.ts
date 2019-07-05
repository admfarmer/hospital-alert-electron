import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../providers/alert.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = [];
  hos_name;
  amphur;
  province;
  // info = [];
  constructor(
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.hos_name = localStorage.getItem('hos_name');
    this.amphur = localStorage.getItem('amphur');
    this.province = localStorage.getItem('province');
    // this.alertStart();
  }

  async alertStart() {
    this.items = null;
    try {
      const rs: any = await this.alertService.alertStart();
      console.log(rs);
      if (rs.info.length > 0) {
        this.items = rs.info;
        console.log(this.items);
      } else {
        this.items = null;
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  }
  async Save() {
    localStorage.setItem('hos_name', this.hos_name);
    localStorage.setItem('amphur', this.amphur);
    localStorage.setItem('province', this.province);

    let info = {
      hos_name: this.hos_name,
      amphur: this.amphur,
      province: this.province,
      create_date: moment(Date()).format('YYYY-MM-DD'),
      create_time: moment(Date()).format('HH:mm:ss'),
      status_flg: 'Y'
    }
    console.log(info);
    try {
      var rs: any;
      rs = await this.alertService.insert(info);
      console.log(rs);

      if (rs.info > 0) {
        // this.edit = false;
        this.alertStart();
        console.log('ส่งรายงานแจ้งเหตุแล้ว');

      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
