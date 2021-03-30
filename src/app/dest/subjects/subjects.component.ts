import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, Subscription } from 'rxjs';

@Component({
    selector: 'app-subjects',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {
    subject: BehaviorSubject<string>;

    subscription?: Subscription;

    constructor() {
        this.subject = new BehaviorSubject('moo');
        // this.subject.next('moo');

        this.subscription = this.subject.subscribe(value => {
            console.log(value);
        });

    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
