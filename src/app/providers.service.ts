import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProviderService {
    constructor(private http: HttpClient) {}

    getProviders() {
        return this.http.get<{id: number, name: string, description: string}[]>('/assets/providers.json');
    }
}