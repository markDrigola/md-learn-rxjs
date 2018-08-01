import {Component, OnInit} from "@angular/core";
import {interval, combineLatest, range, concat, forkJoin, fromEvent, merge} from "rxjs";
import {map, take} from "rxjs/internal/operators";

@Component({
    selector: 'app-combination',
    templateUrl: './combination.component.html',
    styleUrls: ['./combination.component.css']
})
export class CombinationComponent implements OnInit{

    ngOnInit(): void {

        // combineLatest
        // this.combineLatest().subscribe((data) => {
        //     console.log(data);
        // })

        // concat
        // this.concat().subscribe((data) => {
        //     console.log(data);
        // })

        // forkJoin
        // this.forkJoin().subscribe((data) => {
        //     console.log(data);
        // })

        // merge
        // this.merge().subscribe((data) => {
        //     console.log(data);
        // })
    }

    combineLatest() {
        const myInterval = interval(1000);
        const myInterval2 = interval(3000);

        const comb = combineLatest(myInterval, myInterval2);

        return comb
            .pipe(
                map((val) => {
                    return {
                        i1: val[0],
                        i2: val[1]
                    }
                })
            );
    }

    concat() {
        const timer = interval(1000)
            .pipe(
                take(4)
            );

        const sequence = range(1, 10);

        const result = concat(timer, sequence);


        return result;
    }

    forkJoin() {
        const i1 = interval(1000).pipe(
            take(1)
        );
        const i2 = interval(4000).pipe(
            take(1)
        );

        return forkJoin(i1, i2);
    }

    merge() {
        const clicks = fromEvent(document, 'click');
        const int = interval(1000);

        return merge(clicks, int);
    }
}
