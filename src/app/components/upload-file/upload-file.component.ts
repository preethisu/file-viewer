import { Component, OnInit, ContentChild } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { HttpResponse } from '@angular/common/http';




@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
