import {Component, OnInit} from "@angular/core";
import {fromEvent, Observable} from "rxjs";
import {map, throttleTime} from "rxjs/internal/operators";

@Component({
    selector: 'app-pipe',
    templateUrl: './pipe.component.html',
    styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

    ngOnInit(): void {
        // const observable = this.createObservableClick();
        //
        // observable
        //     .pipe(
        //         map((value) => {
        //             console.log(value);
        //
        //             return value;
        //         }),
        //         map((value) => {
        //             console.log(value);
        //
        //             return value;
        //         }),
        //     )
        //     .subscribe((data) => {
        //         console.log(data);
        //     });
    }

    createObservable() {
        return new Observable((observer) => {
            observer.next('1')
        })
    }

    createObservableClick() {
        return fromEvent(document, 'click');
    }


}



