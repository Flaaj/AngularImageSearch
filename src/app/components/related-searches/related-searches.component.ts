import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-related-searches',
    templateUrl: './related-searches.component.html',
    styleUrls: ['./related-searches.component.scss'],
})
export class RelatedSearchesComponent implements OnInit {
    @Input() relatedSearches: { title: string }[] = [];
    @Output() searchRelated = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(): void {
        console.log(this.relatedSearches);
    }

    onSearchRelated(related: string) {
        this.searchRelated.emit(related);
    }
}
