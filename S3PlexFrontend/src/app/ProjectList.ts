import {Project} from './projectEntity';

export interface ProjectList{
    results: Project[];
    query: string;
    count: number;
    totalCount: number;
    page: number;
    totalPages: number;
}