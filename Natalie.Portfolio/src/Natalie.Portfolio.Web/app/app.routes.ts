import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BioComponent } from './bio/bio.component';
import { MediaComponent } from './media/media.component';

export const AppRoutes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'bio', component: BioComponent },
    { path: 'media', component: MediaComponent }
]