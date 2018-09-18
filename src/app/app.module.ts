import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TabModule } from 'angular-tabs-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Webpage components 
import { AppComponent } from './app.component';
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


// Global Components
import { HeaderComponent } from './components/header/header1/header.component';
import { MainHeaderComponent } from './components/header/header1/main-header/main-header.component';

import { NavigationComponent } from './components/navigation/navigation.component';

import { FooterComponent } from './components/footer/footer1/footer.component';

// Directives
import { dropdownDirective } from './directive/dropdown.directive';

// Ng2  Carousel Component
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

// Form Components
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterFromComponent } from './components/forms/register-from/register-from.component';
import { ContactFromComponent } from './components/forms/contact-from/contact-from.component';
import { ForgotPassFormComponent } from './components/forms/forgot-pass-form/forgot-pass-form.component';

// Custom Components
import { CounterComponent } from './components/blocks/counter/counter1/counter.component';
import { Cards1Component } from './components/blocks/cardview/cards1/cards1.component';
import { StudyproComponent } from './components/blocks/studypro/studypro1/studypro.component';
import { SliderBannerComponent } from './components/blocks/slider/slider-banner/slider-banner.component';
import { Heading1Component } from './components/heading/heading1/heading1.component';
import { JoinUsComponent } from './components/blocks/join-us/join-us.component';
import { Slider2Component } from './components/blocks/slider/slider2/slider2.component';
import { Carousel1Component } from './components/carousel/carousel1/carousel1.component';
import { UniversityComponent } from './components/blocks/university/university1/university.component';
import { UpcomingEventsComponent } from './components/blocks/upcoming-events/upcoming-events1/upcoming-events.component';
import { ShopComponent } from './components/blocks/shop/shop1/shop.component';
import { GotopComponent } from './components/blocks/gotop/gototop1/gotop.component';
import { TestimonialComponent } from 'src/app/components/blocks/testimonial/testimonial.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu/sidemenu.component';
import { StudyProgramDescComponent } from './webpages/study-program-details/study-program-desc/study-program-desc.component';
import { StudyProgramInfoComponent } from './webpages/study-program-details/study-program-info/study-program-info.component';
import { StudyProgramCarouselComponent } from './webpages/study-program-details/study-program-carousel/study-program-carousel.component';
import { Header2Component } from './components/header/header2/header2.component';
import { SubscribeComponent } from './components/blocks/subscribe/subscribe.component';
import { Slider3Component } from './components/blocks/slider/slider3/slider3.component';
import { Tabs1Component } from './components/blocks/tabs/tabs1/tabs1.component';
import { Header3Component } from './components/header/header3/header3.component';
import { JobreadyComponent } from './components/blocks/jobready/jobready.component';
import { SlotbookComponent } from './components/blocks/slotbook/slotbook.component';
import { KeyhighlightsComponent } from './components/blocks/keyhighlights/keyhighlights.component';
import { SupportComponent } from './components/blocks/support/support.component';
import { CoursesCardComponent } from './components/blocks/courses-card/courses-card.component';
import { WorkflowComponent } from './components/blocks/workflow/workflow.component';
import { TopbarComponent } from './components/header/topbar/topbar.component';
import { NavMenuComponent } from './components/header/nav-menu/nav-menu.component';
import { ApiService } from './services/http/api.service';
import { Accordian1Component } from './components/blocks/accordian/accordian1/accordian1.component';
import { AccordianService } from './services/accordian.service';
import { Accordian2Component } from './components/blocks/accordian/accordian2/accordian2.component';
import { ChatAppComponent } from './components/blocks/chat-app/chat-app.component';

// For Routing files imports and exports
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './webpages/dashboard/dashboard.component';
import { GuardService } from './services/authentication/guard.service';
import { HomeComponent } from './webpages/dashboard/home/home.component';
import { SettingComponent } from './webpages/dashboard/setting/setting.component';
import { SoftwareComponent } from './webpages/dashboard/software/software.component';
import { DashboardService } from './webpages/dashboard/dashboard.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { SpSetupStartComponent } from './webpages/dashboard/setting/skillpassportSetup/start/start.component';
import { SpSetupFormComponent } from './webpages/dashboard/setting/skillpassportSetup/form/form.component';
import { SlotserviceService } from './services/http/slotservice.service';
import { ModuleService } from './services/model/module.service';
import { SlotbookResolverService } from './services/resolver/slotbook-resolver.service';
import { FeaturesComponent } from './webpages/features/features.component';
import { Tab1Component } from './components/blocks/tabs/tab1/tab1.component';
import { ServiceCheckComponent } from './components/blocks/service-check/service-check.component';
import { FinalCheckComponent } from './components/blocks/final-check/final-check.component';
import { ServiceCheckService } from './services/servicecheck.service';
import { ServiceResolverService } from './services/resolver/serviceCheck-resolver.service';
import { CareerIndexComponent } from './components/blocks/career-index/career-index.component';
import { AboutComponent } from './components/blocks/about/about.component';
import { ServicesAllComponent } from './components/blocks/services-all/services-all.component';
import { CheckColorChangeDirective } from './directive/check-color-change.directive';
import { CareersComponent } from 'src/app/components/blocks/careers/careers.component';


@NgModule({
  declarations: [
    AppComponent,
  
    // Webpage components 
    IndexComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogsComponent,
    ApplyComponent,
    StudyProgramsComponent,
    SidemenuComponent,
    EmailverificationComponent,
    StudyProgramDetailsComponent,
    SubscriptionComponent,
    CoursesComponent,
    SupportpageComponent,
    PagenotfoundComponent,

    // Global Components
    TopbarComponent,
    HeaderComponent,
    Header2Component,
    Header3Component,
    MainHeaderComponent,
    NavigationComponent,
    FooterComponent,
    
    // Directives
    dropdownDirective,
    
    // Form Components
    LoginFormComponent,
    RegisterFromComponent,
    ContactFromComponent,
    ForgotPassFormComponent,
    
    // Custom Components
    StudyproComponent,
    SliderBannerComponent,
    Heading1Component,
    CounterComponent,
    Cards1Component,
    JoinUsComponent,
    Slider2Component,
    Carousel1Component,
    UniversityComponent,
    UpcomingEventsComponent,
    GotopComponent,
    TestimonialComponent,
    StudyProgramDescComponent,
    StudyProgramInfoComponent,
    StudyProgramCarouselComponent,
    SubscribeComponent,
    Slider3Component,
    Tabs1Component,
    JobreadyComponent,
    SlotbookComponent,
    KeyhighlightsComponent,
    SupportComponent,
    CoursesCardComponent,
    WorkflowComponent,
    NavMenuComponent,
    Accordian1Component,
    Accordian2Component,
    ChatAppComponent,
    ShopComponent,
    DashboardComponent,
    HomeComponent,
    SettingComponent,
    SoftwareComponent,
    SpSetupStartComponent,
    SpSetupFormComponent,
    FeaturesComponent,
    Tab1Component,
    ServiceCheckComponent,
    CareersComponent,
    FinalCheckComponent,
    CareerIndexComponent,
    AboutComponent,
    ServicesAllComponent,
    CheckColorChangeDirective,
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    HttpClientModule,    
    TabModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [
    ApiService,
    AccordianService,
    GuardService,
    DashboardService,
    AuthenticationService,
    SlotbookResolverService,
    SlotserviceService,
    ModuleService,
    ServiceCheckService,
    ServiceResolverService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
