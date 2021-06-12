import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { imagesReducer } from './state/images.reducer';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RelatedSearchesComponent } from './components/related-searches/related-searches.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchInputComponent,
        GalleryComponent,
        PaginationComponent,
        RelatedSearchesComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        StoreModule.forRoot({ images: imagesReducer }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
