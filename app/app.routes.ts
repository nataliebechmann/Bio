import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const AppRoutes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent }
]