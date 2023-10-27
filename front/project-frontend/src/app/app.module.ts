import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './website/navbar/navbar.component';
import { FooterComponent } from './website/footer/footer.component';
import { LoginComponent } from './website/login/login.component';
import { ContactComponent } from './website/contact/contact.component';
import { AboutComponent } from './website/about/about.component';
import { HomeComponent } from './website/home/home.component';
import { JwtInterceptor } from 'src/core/services/interceptor/jwt.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AdminModule } from './portal/admin/admin.module';
import { PortalLayoutComponent } from './portal/portal-layout/portal-layout.component';
import { SidebarComponent } from './portal/portal-layout/sidebar/sidebar.component';
import { PortalFooterComponent } from './portal/portal-layout/portal-footer/portal-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    PortalLayoutComponent,
    SidebarComponent,
    PortalFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    RouterModule,
    ToastModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
