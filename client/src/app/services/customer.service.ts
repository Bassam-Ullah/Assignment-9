import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(`${this.apiUrl}/customers`);
  }

  getCustomer(id: string) {
    return this.http.get<CustomerModel>(`${this.apiUrl}/customers/${id}`);
  }

  postCustomer(customer: CustomerModel) {
    return this.http.post(`${this.apiUrl}/customers`, customer);
  }
  updateCustomers(id: string, customer: CustomerModel) {
    return this.http.patch(`${this.apiUrl}/customers/${id}`, customer);
  }
  deleteCustomer(id: string) {
    return this.http.delete(`${this.apiUrl}/customers/${id}`);
  }
}
