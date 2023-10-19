import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeInputModule } from 'angular-code-input';
import { HomeComponent } from './Pages/HomePage/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { CoursesComponent } from './Pages/courses/courses.component';
import { CourseTutorialComponent } from './Pages/course-tutorial/course-tutorial.component';
import { ArticlesComponent } from './Pages/articles/articles.component';
import { ArticleDetailsComponent } from './Pages/article-details/article-details.component';
import { DictionaryComponent } from './Pages/dictionary/dictionary.component';
import { QuestionsComponent } from './Pages/questions/questions.component';
import { LoginComponent } from './Pages/AccountPages/login/login.component';
import { SignUpComponent } from './Pages/AccountPages/sign-up/sign-up.component';
import { VerificationComponent } from './Pages/AccountPages/verification/verification.component';
import { ForgetPasswordComponent } from './Pages/AccountPages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Pages/AccountPages/reset-password/reset-password.component';
import { PrivacyPolicyComponent } from './Pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './Pages/terms-and-conditions/terms-and-conditions.component';



const routes: Routes = [
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact-us', component: ContactUsComponent},

  {path: 'courses', component: CoursesComponent},
  {path: 'course/tutorial', component: CourseTutorialComponent},

  {path: 'articles', component: ArticlesComponent},
  {path: 'article', component: ArticleDetailsComponent},
    
  {path: 'questions', component: QuestionsComponent},
  {path: 'dictionary', component: DictionaryComponent},

  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'verification', component: VerificationComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'reset-password', component: ResetPasswordComponent},

  {path: 'privacy-policy' , component: PrivacyPolicyComponent},
  {path: 'terms-and-conditions' , component: TermsAndConditionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CodeInputModule.forRoot({
      codeLength: 6,
      isCharsCode: false,
      code: '123456'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
