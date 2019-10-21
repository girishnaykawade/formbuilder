import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputComponent } from './input/input.component';
import {FieldsService} from './service/fields.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { FormFieldsComponent } from './form-fields/form-fields.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InputComponent,
    FormFieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [FieldsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
