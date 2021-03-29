import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Joke, JokeService } from 'src/app/services/joke.service';

@Component({
    selector: 'app-jokes',
    templateUrl: './jokes.component.html',
    styleUrls: ['./jokes.component.scss']
})
export class JokesComponent {
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
