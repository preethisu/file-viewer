import { Component, ContentChild, Output, EventEmitter, Input, } from '@angular/core';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import {Data} from './model/data';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UploadFileComponent,Data]

})
export class AppComponent {
  @Input() uploadFile:UploadFileComponent;
  @Output() myEvent = new EventEmitter();
  constructor(private router: Router){}

  selectedFile:boolean=false;
  selectedFiles: FileList;
  currentFileUpload: File;
  fileContent: any;
  data: Data;
  
  
  junk(){
    /* const convertFile = () => {
      const input = document.getElementById('fileInput');

      const reader = new FileReader();
      reader.onload = () => {
        let text = reader.result;
        // console.log('CSV: ', text.substring(0, 100) + '...');
        //convert text to json here
        var json = this.csvJSON(text);
      };
      reader.readAsText(input.files[0]);
    };
    //return result; //JavaScript object
    const csv = require('csv-parser')
    const fs = require('fs')
    const results = [];
  
    fs.createReadStream(event.target.file)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
      // [
      //   { NAME: 'Daffy Duck', AGE: '24' },
      //   { NAME: 'Bugs Bunny', AGE: '22' }
      // ]
    });*/
  }
}
