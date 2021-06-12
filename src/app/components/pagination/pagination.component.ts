import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
    @Output() showMore = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onShowMore(): void {
        this.showMore.emit(true);
    }
}
