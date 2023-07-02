import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  data: any = 'testing';

  constructor(private http:HttpClient) { }

  readFile(fileName: string){
    return this.http.get(fileName);
  }

  downloadFile(fileName: string): any {
    console.log("Downloading: ", fileName);
    return this.http.get(fileName, {responseType: 'blob'});
  }

}
