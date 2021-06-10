import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const getImages = createSelector(
    (state: AppState) => state.images,
    (images: string[]) => images
)
