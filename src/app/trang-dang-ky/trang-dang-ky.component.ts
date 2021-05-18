import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trang-dang-ky',
  templateUrl: './trang-dang-ky.component.html',
  styleUrls: ['./trang-dang-ky.component.css']
})
export class TrangDangKyComponent implements OnInit {
  @ViewChild('formDangKy') formDK:NgForm;
  mangNguoiDungDangKy:any[] = [];
  constructor() { }

  DangKy(value){
    this.mangNguoiDungDangKy.push(value);
    this.formDK.reset();
    
  }

  CapNhat(thamso){
    let taikhoan = thamso.getAttribute('data-taikhoan');
    let matkhau = thamso.getAttribute('data-matkhau');
    let email = thamso.getAttribute('data-email');
    let hoten = thamso.getAttribute('data-hoten');
    let sodt = thamso.getAttribute('data-sodt');
    let maloainguoidung = thamso.getAttribute('data-maloaind');
    this.formDK.setValue({
      TaiKhoan:taikhoan,
      MatKhau:matkhau,
      Email:email,
      HoTen:hoten,
      SoDT:sodt,
      MaLoaiNguoiDung:maloainguoidung
    })
  }

  ngOnInit(): void {
  }

}
