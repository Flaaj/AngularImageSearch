import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const getImages = createSelector(
    (state: any) => [state.images.column1, state.images.column2, state.images.column3],
    (images: { url: string, proportions: number }[][]) => images
);
