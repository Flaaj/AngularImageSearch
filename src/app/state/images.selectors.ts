import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const getImages = createSelector(
    (state: any) => state.images,
    (images: string[]) => images
);
