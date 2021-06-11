import { Component, OnInit } from '@angular/core';
import { UnsplashedService } from 'src/app/services/unsplashed.service';
import { Store, select } from '@ngrx/store';
import { appendImageList, resetImageList } from './state/images.actions';
import { getImages } from './state/images.selectors';
import { AppState } from './state/app.state';
import { map, filter } from 'rxjs/operators';
import { resourceLimits } from 'worker_threads';
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
    ) {}

    ngOnInit(): void {}

    search(query: string) {
        this.unsplashedService.searchImages(query).subscribe((response) => {
            const newImages = response.photos.results.map(
                (result) => result.urls.small
            );
            this.store.dispatch(resetImageList({ images: newImages }));

            this.totalPages = response.photos.total_pages;
            this.lastQuery = query;
            console.log(response);
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
                    (result) => ([result.urls.small, result.height / result.width]
                );
                this.store.dispatch(appendImageList({ images: newImages }));
            });
    }
}
