import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

export interface Joke {
    setup: string;
    punchline: string;
}

@Injectable({
    providedIn: 'root'
})
export class JokeService {
    _subject: BehaviorSubject<Observable<Joke>>;
    observable: Observable<Joke>;

    constructor(private httpClient: HttpClient) {
        // Start behavior subject with a fresh api request
        // This request won't be made until a subscription has been made
        this._subject = new BehaviorSubject(this._getJoke());

        // make api request and switchMap the value of the observable
        // shareReplay will skip making the api request and publish the previous value
        this.observable = this._subject.pipe(
            switchMap(observable => observable),
            shareReplay()
        );
    }

    // This method would never take in arguments (planning for how campaign api request will work)
    // We don't even really need this method, we could just use observable directly
    getJoke(): Observable<Joke> {
        return this.observable;
    }

    // This method would take in arguments for new requests (planning for how campaign api request will work)
    reloadJoke(): void {
        this._subject.next(this._getJoke());
    }

    // This method would take in arguments for new requests (planning for how campaign api request will work)
    _getJoke(): Observable<Joke> {
        return this.httpClient.get<Joke>('https://official-joke-api.appspot.com/random_joke');
    }
}
