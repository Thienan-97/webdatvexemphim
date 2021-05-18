import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TrangChuModule } from './trang-chu/trang-chu.module'
import { AppComponent } from './app.component';
import { QuanTriGheModule } from './quan-tri-ghe/quan-tri-ghe.module';
import { TrangDangKyComponent } from './trang-dang-ky/trang-dang-ky.component';
import { TrangDangNhapComponent } from './trang-dang-nhap/trang-dang-nhap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TrangDangKyComponent,
    TrangDangNhapComponent,
    
  ],
  imports: [
    BrowserModule,
    TrangChuModule,
    QuanTriGheModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
