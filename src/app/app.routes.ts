import { Routes } from '@angular/router';
import { HomeComponent } from './+pages/+public/home/ui/home.component';
import { LoginComponent } from './+pages/+public/login/ui/login.component';
import { BasketComponent } from './+pages/+public/basket/ui/basket.component';
import { AboutComponent } from './+pages/+public/about/ui/about.component';
import { PublicBooksComponent } from './+pages/+public/public-books/ui/public-books.component';
import { PublicnavigationComponent } from './+navigations/publicnavigation/ui/publicnavigation.component';
import { PrivatenavigationComponent } from './+navigations/privatenavigation/ui/privatenavigation.component';
import { DashboardComponent } from './+pages/+private/dashboard/dashboard.component';
import { MembersComponent } from './+pages/+private/members/members.component';
import { PrivateBooksComponent } from './+pages/+private/private-books/private-books.component';

export const routes: Routes = [
    {
        path: 'public', component: PublicnavigationComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'publicbooks', component: PublicBooksComponent },
            { path: 'basket', component: BasketComponent },
            { path: 'about', component: AboutComponent },
            { path:'', redirectTo: 'home', pathMatch: 'prefix' }

        ]
    },
    {
        path: 'admin', component: PrivatenavigationComponent, children: [
            { path: 'home', component: DashboardComponent },
            { path: 'members', component: MembersComponent },
            { path: 'privatebooks', component: PrivateBooksComponent },
            { path:'', redirectTo: 'home', pathMatch: 'prefix' }

        ]
    },
    { path: 'login', component: LoginComponent },
    { path:'', redirectTo: 'public', pathMatch: 'full' }

];
