import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EmployeeModel} from "../model/employee.model";
import {Observable} from "rxjs";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

getAll(): Observable<EmployeeModel[] | null> {
    return this._httpClient.get<EmployeeModel[]>('assets/data/employees.json')
  }
}
