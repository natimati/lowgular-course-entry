import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonModel } from '../model/person.model';
import { CreateEmployeeModel } from '../model/create-employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<PersonModel[] | null> {
    return this._httpClient.get<PersonModel[]>('assets/data/people.json')
  }
  create(employee: CreateEmployeeModel): Observable<any> {
    return this._httpClient.post('https://dummy.restapiexample.com/create', employee)
  }

  delete(id: string): Observable<Object> {
    return this._httpClient.delete('https://dummy.restapiexample.com/delete/' + id)
  }
}
