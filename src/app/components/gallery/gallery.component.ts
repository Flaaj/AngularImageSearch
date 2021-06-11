import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getImages } from '../../state/images.selectors';
@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
    images?: string[];
    @Output() getAnotherPage = new EventEmitter();

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store
            .pipe(select(getImages))
            .subscribe((data) => this.images = data);
    }

    paginate(up: boolean): void {
        this.getAnotherPage.emit(up);
    }
}
