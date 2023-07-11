import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GimmegimmeComponent } from './components/gimmegimme/gimmegimme.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { QuickstatsComponent } from './components/quickstats/quickstats.component';

@NgModule({
  declarations: [
    AppComponent,
    GimmegimmeComponent,
    DashboardComponent,
    QuickstatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
