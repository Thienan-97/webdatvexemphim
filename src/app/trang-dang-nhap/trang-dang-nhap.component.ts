import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trang-dang-nhap',
  templateUrl: './trang-dang-nhap.component.html',
  styleUrls: ['./trang-dang-nhap.component.css']
})
export class TrangDangNhapComponent implements OnInit {
  TaiKhoanKhongHopLe=['user001', 'use002'];
  constructor() { }

  formDangNhap:FormGroup;
  DangNhap(){
    console.log(this.formDangNhap.value);
    
  }

  ngOnInit(): void {
    this.formDangNhap = new FormGroup({
      'TaiKhoan': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9]+'), this.checkKhongHopLe.bind(this)]),
      'MatKhau': new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  checkKhongHopLe(control:FormControl){
    for(let taikhoan of this.TaiKhoanKhongHopLe){
      if(control.value === taikhoan){
        return {'KhongHopLe':true}
      }
      return null;
    }
  }

}
