import {Component, OnInit} from "@angular/core";
import {Subject} from "rxjs";

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

    subject: Subject<any> = new Subject();

    ngOnInit(): void {
    //
    //     this.subject.subscribe((data) => {
    //         console.log(data);
    //     });
    //
    //     this.subject.subscribe((data) => {
    //         console.log(data);
    //     });
    //
    //     console.log(this.subject.observers);
    //
    //     this.subject.next(123);
    }
}
