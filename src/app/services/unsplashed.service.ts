import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        Authorization: 'Client-ID s_sovRg3IXqrulZVVPlZ73SbHIDrAIm8Je67ecbdAwQ',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class UnsplashedService {
    private apiUrl = 'https://api.unsplash.com/';
    constructor(private http: HttpClient) {}

    searchImages(query: string, page: number = 1): Observable<any> {
        const url = `${this.apiUrl}search?query=${query}&page=${page}&per_page=30`;
        return this.http.get<any>(url, httpOptions);
    }
}
