import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroComponent }  from './heroes.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    HeroComponent,
    HeroDetailComponent
  ],
  bootstrap: [HeroComponent]
})

export class AppModule {
}
