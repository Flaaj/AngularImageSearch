export interface UnsplashedRespObj {
    collections: Object;
    meta: Object;
    photos: {
        total_pages: number;
        results: {
            width: number,
            height: number,
            urls: {
                full: string;
                raw: string;
                regular: string;
                small: string;
                thumb: string;
            };
        }[];
    };
    related_searches: Object[];
    users: Object;
}
