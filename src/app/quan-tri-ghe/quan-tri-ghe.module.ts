import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GheComponent } from './ghe/ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { EditDSGheComponent } from './edit-dsghe/edit-dsghe.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GheComponent,
    DanhSachGheComponent,
    EditDSGheComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    GheComponent, DanhSachGheComponent, EditDSGheComponent
  ]
})
export class QuanTriGheModule { }
