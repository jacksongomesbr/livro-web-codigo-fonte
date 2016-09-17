/**
 * Created by Jackson on 15/09/2016.
 */

import {Injectable} from '@angular/core';
import {isObject} from "rxjs/util/isObject";

@Injectable()
export class LocalStorageService {
    constructor() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
    }

    public set(key:string, value:any):void {
        localStorage[key] = isObject(value) ? JSON.stringify(value) : value;
    }

    private tryParseJSON(jsonString:string):any {
        try {
            let o = JSON.parse(jsonString);
            if (o && typeof o === "object") {
                return o;
            }
        }
        catch (e) {
        }

        return false;
    };

    public get(key:string):any {
        let item:any;
        if ((item = localStorage.getItem(key))) {
            return this.tryParseJSON(item) || item;
        }
        return false;
    }

    public remove(key:string):void {
        localStorage.removeItem(key);
    }
}