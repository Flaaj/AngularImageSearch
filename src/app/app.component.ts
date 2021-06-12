import { Component, OnInit } from '@angular/core';
import { UnsplashedService } from 'src/app/services/unsplashed.service';
import { Store } from '@ngrx/store';
import { appendImageList, resetImageList } from './state/images.actions';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    page: number = 1;
    totalPages: number = 1;
    lastQuery: string = '';

    constructor(
        private unsplashedService: UnsplashedService,
        private store: Store
    ) { }

    ngOnInit(): void { }

    search(query: string) {
        this.unsplashedService.searchImages(query).subscribe((response) => {
            const newImages = response.photos.results.map(
                (result) => ({ url: result.urls.small, proportions: result.height / result.width })
            );
            this.store.dispatch(resetImageList({ images: newImages }));

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
                const newImages = response.photos.results.map(
                    (result) => ({ url: result.urls.small, proportions: result.height / result.width })
                )
                this.store.dispatch(appendImageList({ images: newImages }))
            })


    }
}
