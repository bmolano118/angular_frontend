import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './demos/default/default.component';
import { DemoTwoComponent } from './demos/demo-two/demo-two.component';
import { DemoThreeComponent } from './demos/demo-three/demo-three.component';
import { AboutComponent } from './pages/about/about.component';
import { FeaturesComponent } from './pages/features/features.component';
import { TeamComponent } from './pages/team/team.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthGuard } from './core/guards';

const routes: Routes = [
    {path: '',canActivate:[AuthGuard] , component: DefaultComponent},
    {path: 'demo-2',canActivate:[AuthGuard] , component: DemoTwoComponent},
    {path: 'demo-3',canActivate:[AuthGuard] , component: DemoThreeComponent},
    {path: 'about-us',canActivate:[AuthGuard] , component: AboutComponent},
    {path: 'features',canActivate:[AuthGuard] , component: FeaturesComponent},
    {path: 'team',canActivate:[AuthGuard] , component: TeamComponent},
    {path: 'pricing',canActivate:[AuthGuard] , component: PricingComponent},
    {path: 'faq',canActivate:[AuthGuard] , component: FaqComponent},
    {path: 'blog',canActivate:[AuthGuard] , component: BlogComponent},
    {path: 'blog-details',canActivate:[AuthGuard] , component: BlogDetailsComponent},
    {path: 'contact',canActivate:[AuthGuard] , component: ContactComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
