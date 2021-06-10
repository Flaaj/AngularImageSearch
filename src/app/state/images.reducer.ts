import { createReducer, on, Action } from '@ngrx/store';
import { appendImageList } from './images.actions';

export const initialState: string[] = [];

export const imagesReducer = createReducer(
    initialState,
    on(appendImageList, (state, { images }) => {
        return [...state, ...images];
    })
);
