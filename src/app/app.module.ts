import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectsComponent } from './dest/subjects/subjects.component';
import { JokesComponent } from './dest/jokes/jokes.component';
import { CowsComponent } from './dest/cows/cows.component';

@NgModule({
    declarations: [
        AppComponent,
        SubjectsComponent,
        JokesComponent,
        CowsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
