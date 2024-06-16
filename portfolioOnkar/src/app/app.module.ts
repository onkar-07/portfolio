import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';
import { CertificationsComponent } from './certifications/certifications.component';
//Importing prime-ng modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { FieldsetModule } from 'primeng/fieldset';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from './photo.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ProjectsComponent,
    CertificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    InputSwitchModule,
    ToggleButtonModule,
    InputTextModule,
    AccordionModule,
    BrowserAnimationsModule,
    EditorModule,
    CardModule,
    AvatarModule,
    FieldsetModule,
    GalleriaModule,
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
