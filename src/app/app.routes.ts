import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { CoursComponent } from './components/cours/cours.component';
import { AnswersComponent } from './components/answers/answers.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { ClassesComponent } from './components/classes/classes.component';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';
import { LoginComponent } from './components/login/login.component';
import { LessonDetailComponent } from './components/lesson-detail/lesson-detail.component';
import { TeacherProfilComponent } from './components/teacher-profil/teacher-profil.component';
import { StudentProfilComponent } from './components/student-profil/student-profil.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { SchoolProfilComponent } from './components/school-profil/school-profil.component';
import { SchoolLessonsComponent } from './components/school-lessons/school-lessons.component';
import { SchoolTeachersComponent } from './components/school-teachers/school-teachers.component';
import { SchoolStudentsComponent } from './components/school-students/school-students.component';
import { SchoolDetailsComponent } from './components/school-details/school-details.component';
export const routes: Routes = [
    {path:"teacher",component:TeacherProfilComponent},
    {path:"student",component:StudentProfilComponent},
    {path:"",component:LoginComponent},
    {path:"login",component:LoginComponent},
    {path:"school",component:SchoolProfilComponent,
        children:[
            {path:'my-students',component:SchoolStudentsComponent},
        {path:'my-lessons',component:SchoolLessonsComponent},
        {path:'my-teachers',component:SchoolTeachersComponent},
     
    ]
},
    {path:"admin",component:AdminTemplateComponent,
        children:[
            {path:"users",component:UsersComponent},
            {path:"teachers/:id",component:TeacherProfilComponent},
            {path:"teachers",component:TeachersComponent},
            {path:"cours/:id",component:LessonDetailComponent},
            {path:"cours",component:CoursComponent},
            {path:"questions",component:QuestionsComponent},
            {path:"answers",component:AnswersComponent},
            {path:"schools/:id", component:SchoolDetailsComponent},  
            {path:"schools",component:SchoolsComponent},
            {path:"classes",component:ClassesComponent},
    
        ]
    },
    

];
