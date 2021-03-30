import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CowsComponent } from './dest/cows/cows.component';
import { JokesComponent } from './dest/jokes/jokes.component';
import { ShareReplayComponent } from './dest/share-replay/share-replay.component';
import { SubjectsComponent } from './dest/subjects/subjects.component';
import { TheEndComponent } from './dest/the-end/the-end.component';

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
        path: 'share-replay',
        component: ShareReplayComponent,
    },
    {
        path: 'jokes',
        component: JokesComponent,
    },
    {
        path: 'the-end',
        component: TheEndComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
