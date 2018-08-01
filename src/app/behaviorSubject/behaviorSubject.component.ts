import {Component, OnInit} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Component({
    selector: 'app-behavior-subject',
    templateUrl: './behaviorSubject.component.html',
    styleUrls: ['./behaviorSubject.component.css']
})
export class BehaviorSubjectComponent implements OnInit {

    behaviorSubject: BehaviorSubject<any> = new BehaviorSubject(1);

    ngOnInit(): void {

        // this.behaviorSubject.subscribe((data) => {
        //     console.log(data);
        // });
        //
        // this.behaviorSubject.subscribe((data) => {
        //     console.log(data);
        // });
        //
        // this.behaviorSubject.next(123);
        //
        // this.behaviorSubject.subscribe((data) => {
        //     console.log(data);
        // });
    }
}
