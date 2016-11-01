/**
 * Created by Jackson on 31/10/2016.
 */

import {Component, ElementRef} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'file-uploader',
    template: `<input type="file" class="form-control" #up (change)="upload()">`
})
export class FileUploaderComponent {
    constructor(private http: Http, private el: ElementRef) {
    }
    upload(): void {
        let inputEl = this.el.nativeElement.firstElementChild;
        if (inputEl.files.length > 0) { // a file was selected
            let file: FileList = inputEl.files[0];
            console.log(file);
            // do whatever you do...
            // subscribe to observable to listen for response
        }
    }
}