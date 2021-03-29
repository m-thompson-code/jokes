import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subject, Subscription } from 'rxjs';

@Component({
    selector: 'app-subjects',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
    subject: ReplaySubject<string>;

    subscription?: Subscription;

    constructor() {
        this.subject = new ReplaySubject();

        this.subscription = this.subject.subscribe(value => {
            console.log(value);
        });

        this.cowsGo();
    }

    ngOnInit(): void {
    }

    cowsGo(): void {
        this.subject.next('moo');
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
