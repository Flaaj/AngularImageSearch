import { createAction, props } from '@ngrx/store';

export const appendImageList = createAction(
    '[Image List] Append Image List',
    props<{ images: string[] }>()
)
export const resetImageList = createAction(
    '[Image List] Reset Image List',
    props<{ images: string[] }>()
)