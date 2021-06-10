import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UnsplashedRespObj } from '../../UnsplashedRespObj';
@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
    @Input() images?: string[];
    @Output() getAnotherPage = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    paginate(up: boolean): void {
        this.getAnotherPage.emit(up);
    }
}
