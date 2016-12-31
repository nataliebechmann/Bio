import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BioComponent } from './bio/bio.component';
import { ExperienceComponent } from './experience/experience.component';

export const AppRoutes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'bio', component: BioComponent },
    { path: 'experience', component: ExperienceComponent }
]