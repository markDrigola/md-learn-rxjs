import {Component, OnInit} from "@angular/core";
import {ReplaySubject} from "rxjs/Rx";

@Component({
    selector: 'app-replay-subject',
    templateUrl: './replaySubject.component.html',
    styleUrls: ['./replaySubject.component.css']
})
export class ReplaySubjectComponent implements OnInit {
    replaySubject: ReplaySubject<any> = new ReplaySubject(2);

    ngOnInit(): void {

        // this.replaySubject.next(1);
        // this.replaySubject.next(2);
        // this.replaySubject.next(3);
        // this.replaySubject.next(4);
        //
        // this.replaySubject.subscribe((data) => {
        //     console.log(data);
        // });
    }

}
