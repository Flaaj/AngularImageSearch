import { createAction, props } from '@ngrx/store';

export const appendImageList = createAction(
    '[Image List] append',
    props<{ images: string[] }>()
)