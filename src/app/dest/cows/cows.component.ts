import { Component } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const COW_SOUNDS = [
    'moo',
    'moooooo',
    'quack',
    'moo moo ma moo',
];

@Component({
    selector: 'app-cows',
    templateUrl: './cows.component.html',
    styleUrls: ['./cows.component.scss']
})
export class CowsComponent {
    subject: ReplaySubject<string>;
    cows: Observable<string>[] = [];

    constructor() {
        this.subject = new ReplaySubject();

        this.cowsGo();
    }

    addCow(): void {
        ((index: number) => {
            this.cows.push(this.subject.pipe(
                map(value => {
                    return `cow #${index + 1} goes ${value}`;
                }),
                tap(value => {
                    console.log(value);
                })
            ));
        })(this.cows.length);
    }

    cowsGo(): void {
        const seed = Math.floor(Math.random() * COW_SOUNDS.length);
        this.subject.next(COW_SOUNDS[seed]);
    }
}
