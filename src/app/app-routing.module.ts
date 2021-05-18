import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TrangchuComponent } from './trang-chu/trangchu/trangchu.component';
import { EditDSGheComponent } from './quan-tri-ghe/edit-dsghe/edit-dsghe.component';
import { TrangDangNhapComponent } from './trang-dang-nhap/trang-dang-nhap.component';
import { TrangDangKyComponent } from './trang-dang-ky/trang-dang-ky.component';
 
const routes: Routes = [
    {path:'', component: TrangDangNhapComponent},
    {path: 'trangchu', component:TrangchuComponent},
    {path: 'trangdatghe', component:EditDSGheComponent},
    {path: 'trangdangnhap', component:TrangDangNhapComponent},
    {path: 'trangdangky', component:TrangDangKyComponent}

]
 
@NgModule({
    imports: [
        RouterModule.forRoot(routes)  
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }