import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/model/data';
import { MatSort, MatTableDataSource } from '@angular/material';
import { UploadFileService } from 'src/app/services/upload-file.service';

const elements: Data[] = [];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Data]
})
export class HomeComponent implements OnInit {
  dataSource: MatTableDataSource<Data>;
  displayedColumns = ['first_name', 'sur_name', 'issue_count', 'date_of_birth'];
  uploadedFile:boolean = false;
  selectedFile: boolean = false;
  json: Object;
  selectedFiles: FileList;
   constructor(router: Router, data: Data) {
  }
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
  }

  selectFile(event) {
    console.log("Parent component select file");
    this.selectedFile = true;
    this.selectedFiles = event.target.files;
  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'csv') {
        return true;
    }
    else {
        return false;
    }
}
  
  upload() {
    console.log("child component method ::");
    let input = this.selectedFiles;
    if (!this.validateFile(input[0].name)) {
      alert('Selected file format is not supported');
      return false;
  }
  this.selectedFile = false;
  this.uploadedFile = true;
    let reader = new FileReader();
    reader.onload = () => {
      var text = reader.result;
      this.json = this.csvJSON(text);
      let data = new Data();
    }
      reader.readAsText(input[0]);
  }

  public csvJSON(csv) {
    console.log("csv json");
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
      let data = new Data();
      var obj = {};
      var currentline = lines[i].split(",");
      console.log("currentline" + currentline);
      data.first_name = currentline[0].replace(/['"]+/g, '');
      data.sur_name = currentline[1].replace(/['"]+/g, '');
      data.issue_count = currentline[2].replace(/['"]+/g, '');
      data.date_of_birth = currentline[3].replace(/['"]+/g, '');
      console.log('data' + data.toString());
       elements.push(data);
    }
    this.dataSource = new MatTableDataSource(elements);
    this.dataSource.sort = this.sort;
    return result;
  }



}
