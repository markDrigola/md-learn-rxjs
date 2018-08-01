import {Component, OnInit} from '@angular/core';

import {from, Observable, fromEvent, timer, Subject, fromEventPattern} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {throttle} from "rxjs/operators";
import {fromPromise} from "rxjs/internal/observable/fromPromise";


@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    constructor(private http: HttpClient) {}

    // Создаем простой наблюдаемый обьект стандартным способом
    createObservable(data): Observable<any> {
        return new Observable((observer) => {
            observer.next(data);
        })
    }

    // Создаем простой наблюдаемый обьект статически
    createObservableStatic(data): Observable<any> {
        return Observable.create((observer) => {
            observer.next(data);
        });
    }

    // Создаем наблюдаемый обьект из массива метод - "from"
    createObservableFrom(array): Observable<any> {
        return from(array);
    }

    // Создаем наблюдаемый обьект из пользовательского события - "fromEvent"
    createObservableFromEvent(): Observable<any> {
        return fromEvent(document, 'click');
    }

    // Создаем наблюдаемый обьект из пользовательского события с добавлением функций add / remove - "fromEventPattern"
    createObservableFromEventPattern(): Observable<any> {
        function addClickHandler(handler) {
            document.addEventListener('click', handler);
        }

        function removeClickHandler(handler) {
            document.removeEventListener('click', handler);
        }

        return fromEventPattern(
            addClickHandler,
            removeClickHandler
        );
    }

    // Создаем наблюдаемый обьект из Promise - "fromPromise"
    createObservableFromPromise(): Observable<any> {
        const myPromise = new Promise((resolve, reject) => {
           setTimeout(() => {
               resolve('Hello with promise!');
           }, 2000);
        });

        return fromPromise(myPromise);
    }

    ngOnInit() {
        // fromPromise
        // this.createObservableFromPromise().subscribe((data) => {
        //     console.log(data);
        // })

        // fromEventPattern
        // this.createObservableFromEventPattern().subscribe((data) => {
        //     console.log(data);
        // })

        // fromEvent
        // this.createObservableFromEvent().subscribe((data) => {
        //     console.log(data);
        // })

        // Стандартный способ
        // const observable: Observable<any> = this.createObservable('Hello Standard!');
        // observable.subscribe((data) => {
        //     console.log(data);
        // })

        // Статический способ создания - "Create"
        // const observableStatic: Observable<any> = this.createObservableStatic('Hello Static!');
        // observableStatic.subscribe((data) => {
        //     console.log(data);
        // })

        // from
        // const observableFrom: Observable<any> = this.createObservableFrom([1,2,3,4,5,6]);
        // observableFrom.subscribe((data) => {
        //     console.log(data);
        // })


        //
        // observableFromEvent
        //     .pipe(
        //         throttle(val => timer(2000))
        //     )
        //     .subscribe((data) => {
        //     console.log(data);
        // });
    }
}
