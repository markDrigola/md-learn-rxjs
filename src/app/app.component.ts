import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Rx";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
        // debugger  // 1
        // this.testAsync()
        // debugger // 6
    }


    testAsync() {
        // debugger // 2
        // const observable = new Observable((observer) => {
        //     debugger // 4
        //     setTimeout(() => {
        //         debugger // 7
        //         observer.next(1);
        //     }, 3000)
        // });
        // debugger // 3
        // observable.subscribe((data) => {
        //     debugger // 8
        //     console.log(data);
        // })
        // debugger // 5
    }
}
