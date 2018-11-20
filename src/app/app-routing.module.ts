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
import { DashboardComponent } from "./webpages/dashboard/dashboard.component";
import { HomeComponent } from './webpages/dashboard/home/home.component';
import { SettingComponent } from './webpages/dashboard/setting/setting.component';
import { SoftwareComponent } from './webpages/dashboard/software/software.component';


import { GuardService } from "./services/authentication/guard.service";
import { SpSetupStartComponent } from "./webpages/dashboard/setting/skillpassportSetup/start/start.component";
import { SpSetupFormComponent } from "./webpages/dashboard/setting/skillpassportSetup/form/form.component";
import { SlotbookResolverService } from "./services/resolver/slotbook-resolver.service";
import { FeaturesComponent } from "./webpages/features/features.component";
import { ServiceResolverService } from "./services/resolver/serviceCheck-resolver.service";
import { AboutComponent } from "../app/components/blocks/about/about.component";
import { ServicesAllComponent } from './components/blocks/services-all/services-all.component';
import { CareersComponent } from './webpages/careers/careers.component';
import { AppDevelopmentComponent } from './webpages/services/app-development/app-development.component';
import { BusinessReEngineeringComponent } from './webpages/services/business-re-engineering/business-re-engineering.component';
import { EGovernenceComponent } from './webpages/services/e-governence/e-governence.component';
import { FinanceAccountServiceComponent } from './webpages/services/finance-account-service/finance-account-service.component';
import { SmartEmployeeServiceComponent } from './webpages/services/smart-employee-service/smart-employee-service.component';
import { WhymactecComponent } from './webpages/whymactec/whymactec.component';
import { ProcessExcellenceComponent } from './webpages/services/process-excellence/process-excellence.component';
import { SbusServicesComponent } from "./webpages/sbus/sbus-services/sbus-services.component";
import { SbusStrategyComponent } from "./webpages/sbus/sbus-strategy/sbus-strategy.component";
import { FinanceAccountingComponent } from "./webpages/sbus/sbus-services/finance-accounting/finance-accounting.component";
import { TechnologyConsultingServiceComponent } from "./webpages/sbus/sbus-services/technology-consulting-service/technology-consulting-service.component";
import { OperationalExcellenceComponent } from "./webpages/sbus/sbus-services/operational-excellence/operational-excellence.component";
import { SbusFirstComponent } from "./webpages/sbus/sbus-services/sbus-first/sbus-first.component";
import { JobslistComponent } from "./webpages/careers/joblist/jobslist.component";
const appRoutes: Routes = [
    // { path: "", component: IndexComponent, resolve: {server: SlotbookResolverService} },
    {
        // path: "feature", 
        path: "",
        component: FeaturesComponent,
        resolve: {
            server: SlotbookResolverService,
            serviceData: ServiceResolverService
        }

    },
    // {
    //     path: "courses", children: [
    //         { path: "", component: CoursesComponent },
    //         { path: "section", component: CoursesComponent }
    //     ]
    // },
    { path: "support", component: SupportpageComponent },
    {
        path: "allProducts", component: ServicesAllComponent,
        resolve: {
            serviceData: ServiceResolverService
        }
    },
    // {
    //     path: "dashboard",
    //     canActivate: [GuardService],
    //     component: DashboardComponent,
    //     children: [
    //         { path: "", component: HomeComponent },
    //         {
    //             path: "setting", component: SettingComponent, children: [
    //                 { path: "", component: SpSetupStartComponent },
    //                 { path: "sp-setup-form", component: SpSetupFormComponent }
    //             ]
    //         },
    //         { path: "software", component: SoftwareComponent }
    //     ]
    // },
    { path: "study-programs", component: StudyProgramsComponent },
    { path: "apply", component: ApplyComponent },
    // { path: "blogs", component: BlogsComponent },
    { path: "sbus-strategy", component: SbusStrategyComponent },
    { path: "sbus-service",component: SbusServicesComponent, children: [
        { path: "", component: SbusFirstComponent },
        { path: "finance-accounting", component: FinanceAccountingComponent },
        { path: "technology-services", component: TechnologyConsultingServiceComponent },
        { path: "operation-excellence", component: OperationalExcellenceComponent },
    ]},
    { path: "careers", children: [
        { path: "", component: CareersComponent },
        { path: "joblist", component: JobslistComponent }
    ]},
    { path: "aboutus", component: AboutUsComponent },
    { path: "aboutus/:path", component: AboutUsComponent },
    { path: "why-mactec", component: WhymactecComponent },
    { path: "contact", component: ContactUsComponent },
    // { path: "appdevelopment", component: AppDevelopmentComponent },
    // { path: "business", component: BusinessReEngineeringComponent },
    // { path: "e-governence", component: EGovernenceComponent },
    // { path: "finance-accounts", component: FinanceAccountServiceComponent },
    // { path: "smart-employee", component: SmartEmployeeServiceComponent },
    // { path: "study-programs/card1", component: StudyProgramDetailsComponent },
    // { path: "suscribe", component: SubscriptionComponent },
    // { path: "verifydash", component: EmailverificationComponent },
    // { path: "process-excellence", component: ProcessExcellenceComponent },
    { path: "pagenotfound", component: PagenotfoundComponent },
    
    { path: "**", redirectTo: "/pagenotfound" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}