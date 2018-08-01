import {Component, OnInit} from "@angular/core";
import {fromEvent, interval, timer, of} from "rxjs";
import {
    buffer, tap, concatMap, take, throttle, groupBy, flatMap, reduce, map, pluck,
    mapTo, scan, mergeMap
} from "rxjs/internal/operators";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-transformation',
    templateUrl: './transformation.component.html',
    styleUrls: ['./transformation.component.css']
})
export class TransformationComponent implements OnInit {

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        // buffer
        // this.buffer().subscribe((data) => {
        //     console.log(data);
        // })

        // concatMap
        // this.concatMap().subscribe((data) => {
        //     console.log(data);
        // })

        // groupBy
        // this.groupBy().subscribe((data) => {
        //     console.log(data);
        // })

        // map
        // this.map().subscribe((data) => {
        //     console.log(data);
        // })

        // mergeMap -> flatMap
        // this.mergeMap().subscribe((data) => {
        //     console.log(data);
        // })

        // pluck
        // this.pluck().subscribe((data) => {
        //     console.log(data);
        // })

        // scan
        // this.scan().subscribe((data) => {
        //     console.log(data);
        // })
    }

    concatMap() {
        const clicks = fromEvent(document, 'click');
        const result = clicks
            .pipe(
                // throttle((val) => {
                //     return timer(2000)
                // }),
                concatMap((ev) => {
                    // debugger
                    return timer(3000)
                    // return this.http.get('https://jsonplaceholder.typicode.com/posts')
                    //         return interval(1000)
                    //             .pipe(
                    //                 take(4)
                    //             )
                })
            );
        return result;
    }

    buffer() {
        const click = fromEvent(document, 'click');
        const myInterval = interval(1000);

        return myInterval.pipe(
            buffer(click)
        );
    }

    groupBy() {
        return of(
            {id: 1, name: 'aze1'},
            {id: 2, name: 'sf2'},
            {id: 2, name: 'dg2'},
            {id: 1, name: 'erg1'},
            {id: 1, name: 'df1'},
            {id: 2, name: 'sfqfb2'},
            {id: 3, name: 'qfs1'},
            {id: 2, name: 'qsgqsfg2'}
        ).pipe(
            groupBy((p) => {
               return p.id;
            }),
            flatMap( (group$) => group$.pipe(
                reduce((acc, cur) => [...acc, cur], []))
            )
        )
    }

    map() {
        return of(1,2,3)
            .pipe(
                map((val) => {
                    return val * 3;
                })
            )
    }

    mergeMap() {
        const click = fromEvent(document, 'click');
        const result = click
            .pipe(
                mergeMap((x) => {
                    debugger
                    const eventName = x.type;

                    return interval(1000)
                        .pipe(
                            take(4),
                            map(i => eventName + String(i))
                        )
                })
            );
        return result;
    }

    pluck() {
        const clicks = fromEvent(document, 'click');
        const tagNames = clicks
            .pipe(
                pluck('target', 'tagName')
            );
        return tagNames;
    }

    scan() {
        const clicks = fromEvent(document, 'click');
        const ones = clicks
            .pipe(
                mapTo(1)
            );

        const seed = '0';
        const count = ones
            .pipe(
                scan((acc, one) => {
                    return acc + one;
                }, seed)
            );

        console.log(seed);
        return count;
    }
}
