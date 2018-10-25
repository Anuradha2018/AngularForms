import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProfileReactiveComponent } from './profile-reactive/profile-reactive.component';
import { CommonModule } from '@angular/common';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ReactiveFormComponent,
    ProfileReactiveComponent,
    ProfileEditorComponent,
    HeroFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
