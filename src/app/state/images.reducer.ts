import { createReducer, on, Action } from '@ngrx/store';
import { appendImageList, resetImageList } from './images.actions';

export interface imageColumns {
    column1: string[];
    column2: string[];
    column3: string[];
}

export const initialState: imageColumns = {
    column1: [],
    column2: [],
    column3: [],
};

export const imagesReducer = createReducer(
    initialState,
    on(appendImageList, (state, { images }) => {
        const col1 = [...state.column1];
        const col2 = [...state.column2];
        const col3 = [...state.column3];
        
        images.forEach(image => {

        })
        return state;
    }),
    
    on(resetImageList, (state, { images }) => {
        const col1 = [];
        const col2 = [];
        const col3 = [];
        return state;
    })
);
