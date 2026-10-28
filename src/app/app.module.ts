import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SupabaseService } from './supabase.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    AppComponent,
  ],
  declarations: [],
  providers: [SupabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}