import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BioComponent } from './bio/bio.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(AppRoutes),
	],
	declarations: [
		AppComponent,
		HomeComponent,
		ContactComponent,
		BioComponent,
		ExperienceComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule { } 