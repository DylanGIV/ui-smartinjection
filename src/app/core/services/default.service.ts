import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import {Observable, Subject} from 'rxjs';
// import {map} from 'rxjs/operators';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  private headers = new HttpHeaders().set('Accept', 'text/*');

  private url = 'http://localhost:10050/wells';
  private project = 'http://localhost:10050/projects';
  private createProjectURL = 'http://localhost:10050/createProjectFlow';
  private addRemoveWellURL = 'http://localhost:10050/addRemoveWellFlow';

  constructor(private http: HttpClient) { }

  getProjects() {
    console.log('in getProjects');
    return this.http.get(this.project);
  }

  createProject(formData: FormData) {
    console.log('in createProject: ');

    return this.http.post(this.createProjectURL, formData, {headers: this.headers, responseType: 'text'});
  }

  addRemoveWell(formData: FormData) {
    console.log('in addRemoveWell: ');

    return this.http.post(this.addRemoveWellURL, formData,{headers: this.headers, responseType: 'text'});
  }
}
