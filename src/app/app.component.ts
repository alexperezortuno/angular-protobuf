import {Component} from '@angular/core';
import {HelloWorldService} from "./services/hello-world.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-protobuf';

    constructor(
        private _client: HelloWorldService,
    ) {
        this._client.hello("Hello");
    }

}
