import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
    private apiUrl = 'http://localhost:5291/api/OrderManagement';

    constructor(private httpClient: HttpClient) { }
    
    getProductsNotInOrders(): Observable<Product[]> {
        debugger
      return this.httpClient.get<Product[]>(this.apiUrl);
    }
}