import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/HomePage/home/home.component';
import { HeaderComponent } from './Pages/Shared/header/header.component';
import { FooterComponent } from './Pages/Shared/footer/footer.component';
import { HeroSectionComponent } from './Pages/HomePage/hero-section/hero-section.component';
import { AboutSectionComponent } from './Pages/HomePage/about-section/about-section.component';
import { ContactUsSectionComponent } from './Pages/HomePage/contact-us-section/contact-us-section.component';
import { CoursesSectionComponent } from './Pages/HomePage/courses-section/courses-section.component';
import { ArticlesSectionComponent } from './Pages/HomePage/articles-section/articles-section.component';
import { QuestionSectionComponent } from './Pages/HomePage/question-section/question-section.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { CoursesComponent } from './Pages/courses/courses.component';
import { ArticlesComponent } from './Pages/articles/articles.component';
import { CourseDetailsComponent } from './Pages/course-details/course-details.component';
import { ArticleDetailsComponent } from './Pages/article-details/article-details.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { LoginComponent } from './Pages/login/login.component';
import { VerificationComponent } from './Pages/verification/verification.component';
import { ForgetPasswordComponent } from './Pages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';
import { PrivacyPolicyComponent } from './Pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './Pages/terms-and-conditions/terms-and-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,    
    HeroSectionComponent,
    AboutSectionComponent,    
    ContactUsSectionComponent,
    CoursesSectionComponent,
    ArticlesSectionComponent, 
    QuestionSectionComponent,
    AboutComponent,
    ContactUsComponent,           
    CoursesComponent,
    ArticlesComponent,
    CourseDetailsComponent,
    ArticleDetailsComponent,    
    SignUpComponent,
    LoginComponent,
    VerificationComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,    
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
