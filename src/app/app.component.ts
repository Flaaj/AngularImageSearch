import { Component, OnInit } from '@angular/core';
import { UnsplashedService } from 'src/app/services/unsplashed.service';
import { UnsplashedRespObj } from 'src/app/UnsplashedRespObj';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    images?: UnsplashedRespObj;
    page: number = 1;
    totalPages: number = 1;
    lastQuery: string = '';

    constructor(private unsplashedService: UnsplashedService) {}
    ngOnInit(): void {}

    search(query: string) {
        this.unsplashedService.searchImages(query).subscribe((response) => {
            this.images = response;
            this.totalPages = response.photos.total_pages;
            this.lastQuery = query;
        });
    }

    getAnotherPage(up: boolean = true) {
        if (!up && this.page == 1) return;
        if (up && this.page == this.totalPages) return;

        if (up) this.page++;
        else this.page--;

        this.unsplashedService
            .searchImages(this.lastQuery, this.page)
            .subscribe((response) => {
                this.images = response;
            });
    }
}
