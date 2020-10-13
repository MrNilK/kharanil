import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//for api import httpClientModule and formsModule
import { HttpClientModule } from "@angular/common/http";
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,  HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
