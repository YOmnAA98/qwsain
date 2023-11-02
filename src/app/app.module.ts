import { CodeInputModule } from 'angular-code-input';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/HomePage/home/home.component';
import { HeaderComponent } from './Pages/Shared/header/header.component';
import { FooterComponent } from './Pages/Shared/footer/footer.component';
import { HeroSectionComponent } from './Pages/HomePage/hero-section/hero-section.component';
import { CoursesSectionComponent } from './Pages/HomePage/courses-section/courses-section.component';
import { ArticlesSectionComponent } from './Pages/HomePage/articles-section/articles-section.component';
import { QuestionSectionComponent } from './Pages/HomePage/question-section/question-section.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { CoursesComponent } from './Pages/courses/courses.component';
import { ArticlesComponent } from './Pages/articles/articles.component';
import { CourseTutorialComponent } from './Pages/course-tutorial/course-tutorial.component';
import { ArticleDetailsComponent } from './Pages/article-details/article-details.component';
import { DictionaryComponent } from './Pages/dictionary/dictionary.component';
import { WordComponent } from './Pages/word/word.component';
import { QuestionsComponent } from './Pages/questions/questions.component';
import { SignUpComponent } from './Pages/AccountPages/sign-up/sign-up.component';
import { LoginComponent } from './Pages/AccountPages/login/login.component';
import { VerificationComponent } from './Pages/AccountPages/verification/verification.component';
import { ForgetPasswordComponent } from './Pages/AccountPages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Pages/AccountPages/reset-password/reset-password.component';
import { PrivacyPolicyComponent } from './Pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './Pages/terms-and-conditions/terms-and-conditions.component';
import { PaginationComponent } from './Pages/Shared/pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionComponent } from './Pages/question/question.component';
import { DictionarySectionComponent } from './Pages/HomePage/dictionary-section/dictionary-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,    
    HeroSectionComponent,          
    CoursesSectionComponent,
    ArticlesSectionComponent, 
    DictionaryComponent,
    WordComponent,   
    QuestionSectionComponent,
    AboutComponent,
    ContactUsComponent,           
    CoursesComponent,
    ArticlesComponent,
    CourseTutorialComponent, 
    ArticleDetailsComponent,
    QuestionsComponent,       
    SignUpComponent,
    LoginComponent,
    VerificationComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,    
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    PaginationComponent,
    QuestionComponent,
    DictionarySectionComponent,        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CodeInputModule,
    HighlightModule,
    BrowserAnimationsModule,
    ClipboardModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),     
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
