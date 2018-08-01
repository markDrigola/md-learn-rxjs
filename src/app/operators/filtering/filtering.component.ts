import {Component, OnInit} from "@angular/core";
import {fromEvent, interval, timer} from "rxjs/index";
import {debounceTime, filter, take, throttleTime} from "rxjs/internal/operators";

@Component({
    selector: 'app-filtering',
    templateUrl: './filtering.component.html',
    styleUrls: ['./filtering.component.css']
})
export class FilteringComponent implements OnInit {

    ngOnInit(): void {
        // debounceTime
        // this.debounceTime().subscribe((data) => {
        //     console.log(data);
        // })

        // take
        // this.take().subscribe((data) => {
        //     console.log(data);
        // })

        // filter
        // this.filter().subscribe((data) => {
        //     console.log(data);
        // })

        // throttleTime
        // this.throttleTime().subscribe((data) => {
        //     console.log(data);
        // })
    }

    debounceTime() {
        const clicks = fromEvent(document, 'click');
        const result = clicks
            .pipe(
                debounceTime(2000)
                // debounce((val) => {
                //     return timer(1000)
                // })
            );
        return result;
    }

    take() {
        const myInterval = interval(1000);
        const five = myInterval.pipe(
            take(5)
        );
        return five;
    }

    filter() {
        const clicks = fromEvent(document, 'click');
        const clicksOnDivs = clicks
            .pipe(
                filter((ev) => {
                    return ev.target['tagName'] === 'DIV';
                })
            );

        return clicksOnDivs;
    }

    throttleTime() {
        const clicks = fromEvent(document, 'click');
        const result = clicks
            .pipe(
                throttleTime(1000)
            );
        return result;
    }
}
