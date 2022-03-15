import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ParamsService {
    constructor() {
    }


    public static get testServer(): string {
        return `http://localhost:8880`;
    }
}
