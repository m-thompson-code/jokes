import { Component } from '@angular/core';
import { Joke, JokeService } from './services/joke.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    jokes$: Observable<Joke>[] = [];

    constructor(private jokeService: JokeService) {}

    getJoke(): void {
        const joke$ = this.jokeService.getJoke().pipe(
            tap(values => {
                const { setup, punchline } = values;
                console.log(setup, punchline);
            })
        );

        this.jokes$.push(joke$);
    }

    reloadJoke(): void {
        this.jokeService.reloadJoke();
    }

    clearJokes(): void {
        this.jokes$ = [];
    }
}
