export interface UnsplashedRespObj {
    collections: Object;
    meta: Object;
    photos: {
        total_pages: number;
        results: {
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