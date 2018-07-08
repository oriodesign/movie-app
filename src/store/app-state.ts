import {Media} from '../model/media';

export interface MediaResults { [id: string]: Media }
export interface PageResults { [pageNumber: string]: number[] }

export interface AppState {
    loading: boolean;
    q: string;
    media: MediaResults;
    currentPage: number;
    totalPages: number;
    totalResults: number;
    pages: PageResults;
}
