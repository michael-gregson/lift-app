import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Program } from './program';

@Injectable()
export class ProgramService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private programsUrl = 'api/programs';

  constructor(private http: Http) { }

  getPrograms(): Promise<Program[]> {
    return this.http.get(this.programsUrl)
      .toPromise()
      .then(response => response.json().data as Program[])
      .catch(this.handleError);
  }

  getProgram(id: number): Promise<Program> {
    const url = `${this.programsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Program)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
