import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, ReplaySubject, Subject, BehaviorSubject, Subscription } from 'rxjs';
import { map, share, shareReplay, switchMap, tap } from 'rxjs/operators';

const COW_SOUNDS = [
    'moo',
    'moooooo',
    'quack',
    'moo moo ma moo',
];

export interface Cow {
    sound: string;
    imageUrl: string;
}

@Component({
    selector: 'app-share-replay',
    templateUrl: './share-replay.component.html',
    styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent {
    subject: ReplaySubject<string>;
    observable: Observable<Cow>;
    cows: Observable<Cow>[] = [];

    subscription?: Subscription;

    constructor(private http: HttpClient) {
        this.subject = new ReplaySubject();

        this.observable = this.subject.pipe(
            switchMap(sound => {
                return this.getCowImage(sound).pipe(map(imageUrl => ({
                    sound, imageUrl
                })))
            }),
            shareReplay(),
        );

        this.cowsGo();
    }

    addCow(): void {
        ((index: number) => {
            this.cows.push(this.observable.pipe(
                map(cow => {
                    return {
                        ...cow, sound: `cow #${index + 1} goes ${cow.sound}`,
                    };
                }),
                tap(cow => {
                    console.log(cow);
                })
            ));
        })(this.cows.length);
    }

    cowsGo(): void {
        const seed = Math.floor(Math.random() * COW_SOUNDS.length);
        this.subject.next(COW_SOUNDS[seed]);
    }

    getCowImage(sound: string): Observable<string> {
        return this.http.post('http://localhost:3000/cow', {
            sound: sound,
        }).pipe(map((res: any) => {
            return res.url as string;
        }));
    }
}
