import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnsplashedRespObj } from "../UnsplashedRespObj"

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

    searchImages(query: string, page: number = 1): Observable<UnsplashedRespObj> {
        const url = `${this.apiUrl}search?query=${query}&page=${page}&per_page=12`;
        return this.http.get<UnsplashedRespObj>(url, httpOptions)
    }
}
