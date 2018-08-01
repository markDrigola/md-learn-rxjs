import {Component, OnInit} from "@angular/core";
import {fromEvent, Observable} from "rxjs";
import {map} from "rxjs/internal/operators";

@Component({
    selector: 'app-custom-operator',
    templateUrl: './customOperator.component.html',
    styleUrls: ['./customOperator.component.css']
})
export class CustomOperatorComponent implements OnInit {

    ngOnInit(): void {
        // this.createObservableFromEvent()
        //     .pipe(
        //         transformEventClick((num) => {
        //             return num * 2;
        //         }),
        //         map((val) => {
        //             console.log(val);
        //
        //             return val
        //         })
        //     )
        //     .subscribe((data) => {
        //         console.log(data);
        //     });

        // this.createObservable('Hello')
        //     .pipe(
        //         myStrOperator(3)
        //     )
        //     .subscribe((data) => {
        //         console.log(data);
        //     })

    }

    createObservableFromEvent() {
        return fromEvent(document, 'click');
    }

    createObservable(data) {
        return Observable.create((observer) => {
            observer.next(data);
        })
    }
}




const myStrOperator = (letterPosition: number = 0, upper: boolean = false) => {
    return (source: Observable<any>) => {

        return new Observable<any>((observer) => {

            return source.subscribe({
                next(x) {
                    const firstLetter = x[letterPosition];

                    if (upper) {
                        observer.next(firstLetter.toUpperCase());
                        observer.complete();
                    }

                    observer.next(firstLetter);
                    observer.complete();
                }
            })
        });
    };
};

export interface predicateInterface {
    (num: number): number;
}

const transformEventClick = (predicate?: predicateInterface) => {
    return (source: Observable<any>) => {
        return new Observable<any>((observer) => {
            return source.subscribe({
                next(x) {
                    const num: number = Number(x['clientX']);
                    let predicateResult: number = null;

                    predicateResult = predicate(num);

                    if (predicateResult) {
                        observer.next(predicateResult);
                    } else {
                        observer.next(num);
                    }
                }
            })
        });
    };
};
