import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CreateComponent} from './operators/create/create.component';
import {HttpClientModule} from "@angular/common/http";
import {TransformationComponent} from "./operators/transformation/transformation.component";
import {FilteringComponent} from "./operators/filtering/filtering.component";
import {CombinationComponent} from "./operators/combination/combination.component";
import {SubjectComponent} from "./subject/subject.component";
import {BehaviorSubjectComponent} from "./behaviorSubject/behaviorSubject.component";
import {ReplaySubjectComponent} from "./replaySubject/replaySubject.component";
import {PipeComponent} from "./operators/pipe/pipe.component";
import {CustomOperatorComponent} from "./operators/customOperator/customOperator.component";

@NgModule({
    declarations: [
        AppComponent,
        CreateComponent,
        TransformationComponent,
        FilteringComponent,
        CombinationComponent,
        PipeComponent,
        CustomOperatorComponent,

        SubjectComponent,
        BehaviorSubjectComponent,
        ReplaySubjectComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
