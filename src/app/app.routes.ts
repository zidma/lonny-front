import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { CoursComponent } from './components/cours/cours.component';
import { AnswersComponent } from './components/answers/answers.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { ClassesComponent } from './components/classes/classes.component';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:"",component:LoginComponent},
    {path:"login",component:LoginComponent},
    {path:"admin",component:AdminTemplateComponent,
        children:[
            {path:"users",component:UsersComponent},
            {path:"cours",component:CoursComponent},
            {path:"questions",component:QuestionsComponent},
            {path:"answers",component:AnswersComponent},
            {path:"schools",component:SchoolsComponent},
            {path:"classes",component:ClassesComponent}
        ]
    },
    

];
