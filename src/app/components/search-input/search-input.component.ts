import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Output() search = new EventEmitter();
  query?: string;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.search.emit(this.query);
  }
}
