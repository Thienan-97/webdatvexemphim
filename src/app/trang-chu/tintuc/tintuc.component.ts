import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent implements OnInit {
  loaiTinTuc: String = "DienAnh";
  buttonDienAnh: boolean = true;
  buttonKhuyenMai: boolean = false;
  buttonReview: boolean = false;
  constructor() { }

  chonLoaiTin(val) {
    this.loaiTinTuc = val;
  }

  chonButton() {
    switch (this.loaiTinTuc) {
      case 'KhuyenMai':
        this.buttonDienAnh = false;
        this.buttonReview = false;
        this.buttonKhuyenMai = true;
        break;
      case 'Review':
        this.buttonDienAnh = false;
        this.buttonKhuyenMai = false;
        this.buttonReview = true;
        break;
      case 'DienAnh':
        this.buttonDienAnh = true;
        this.buttonKhuyenMai = false;
        this.buttonReview = false;
        break;
    }
  }


  ngOnInit(): void {
  }

}
