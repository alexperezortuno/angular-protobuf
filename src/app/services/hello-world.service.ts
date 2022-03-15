import {Injectable} from '@angular/core';
import {HelloWorldServiceClient, ServiceError} from "../../../proto/generated/proto/hello_pb_service";
import {HelloRequest, HelloResponse} from "../../../proto/generated/proto/hello_pb";
import {ParamsService} from "./params.service";

@Injectable({
    providedIn: 'root'
})
export class HelloWorldService {
    private client: HelloWorldServiceClient;

    constructor() {
        this.client = new HelloWorldServiceClient(
            ParamsService.testServer);
    }

    hello(text: string): void {
        const request = new HelloRequest();
        request.setText(text);
        this.client.hello(
            request, (error: ServiceError | null, response: HelloResponse) => {
                // Your code to handle error & response.
                console.log('Error: ' + error);
                console.log('HelloResponse: ' + response);
            });
    }
}
