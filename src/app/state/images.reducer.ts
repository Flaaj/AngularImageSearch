import { createReducer, on, Action } from '@ngrx/store';
import { appendImageList, resetImageList } from './images.actions';
import { AppState } from "../state/app.state"

export const initialState: AppState = {
    column1: [], column1Height: 0,
    column2: [], column2Height: 0,
    column3: [], column3Height: 0
};

export const imagesReducer = createReducer(
    initialState,
    on(appendImageList, (state, { images }) => {
        const column1: { url: string, proportions: number }[] = [...state.column1];
        const column2: { url: string, proportions: number }[] = [...state.column2];
        const column3: { url: string, proportions: number }[] = [...state.column3];
        let column1Height: number = state.column1Height;
        let column2Height: number = state.column2Height;
        let column3Height: number = state.column3Height;
        images.forEach(image => {
            if (column1Height <= column2Height && column1Height <= column3Height) {
                column1Height += image.proportions;
                column1.push(image);
            } else if (column2Height <= column3Height) {
                column2Height += image.proportions;
                column2.push(image);
            } else {
                column3Height += image.proportions;
                column3.push(image);
            }
        })
        const newState = { ...state, column1, column2, column3, column1Height, column2Height, column3Height }
        return newState;
    }),

    on(resetImageList, (state, { images }) => {
        const column1: { url: string, proportions: number }[] = [];
        const column2: { url: string, proportions: number }[] = [];
        const column3: { url: string, proportions: number }[] = [];
        let column1Height: number = 0;
        let column2Height: number = 0;
        let column3Height: number = 0;
        images.forEach(image => {
            if (column1Height < column2Height && column1Height < column3Height) {
                column1Height += image.proportions;
                column1.push(image);
            } else if (column2Height < column3Height) {
                column2Height += image.proportions;
                column2.push(image);
            } else {
                column3Height += image.proportions;
                column3.push(image);
            }
        })
        const newState = { ...state, column1, column2, column3, column1Height, column2Height, column3Height }
        return newState;
    })
);
