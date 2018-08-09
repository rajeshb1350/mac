import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// Webpage components 
import { IndexComponent } from './webpages/index/index.component';
import { AboutUsComponent } from './webpages/about-us/about-us.component';
import { ContactUsComponent } from './webpages/contact-us/contact-us.component';
import { BlogsComponent } from './webpages/blogs/blogs.component';
import { ApplyComponent } from './webpages/apply/apply.component';
import { StudyProgramsComponent } from './webpages/study-programs/study-programs.component';
import { EmailverificationComponent } from './webpages/emailverification/emailverification.component';
import { SupportpageComponent } from './webpages/support/supportpage/supportpage.component';
import { CoursesComponent } from 'src/app/webpages/courses/courses.component';
import { PagenotfoundComponent } from './webpages/pagenotfound/pagenotfound.component';
import { StudyProgramDetailsComponent } from './webpages/study-program-details/study-program-details.component';
import { SubscriptionComponent } from './components/forms/subscription-form/subscription-from/subscription.component';

const appRoutes: Routes = [
    { path: "", component: IndexComponent },
    { path: "study-programs", component: StudyProgramsComponent },
    { path: "apply", component: ApplyComponent },
    { path: "blogs", component: BlogsComponent },
    { path: "about", component: AboutUsComponent },
    { path: "contact", component: ContactUsComponent },
    { path: "study-programs/card1", component: StudyProgramDetailsComponent },
    { path: "suscribe", component: SubscriptionComponent },
    { path: "verifydash", component: EmailverificationComponent },
    { path: "courses", component: CoursesComponent },
    { path: "support", component: SupportpageComponent },
    { path: "pagenotfound", component: PagenotfoundComponent },
    { path: "**", redirectTo: "/pagenotfound" }
];
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{
}