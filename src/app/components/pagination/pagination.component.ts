import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
    @Output() paginate = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    paginateUp(): void {
        this.paginate.emit(true);
    }
    paginateDown(): void {
        this.paginate.emit(false);
    }
}
