import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CowsComponent } from './dest/cows/cows.component';
import { JokesComponent } from './dest/jokes/jokes.component';
import { SubjectsComponent } from './dest/subjects/subjects.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'jokes',
    },
    {
        path: 'subjects',
        component: SubjectsComponent,
    },
    {
        path: 'cows',
        component: CowsComponent,
    },
    {
        path: 'jokes',
        component: JokesComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
