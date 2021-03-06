import { collaborator } from '../models/collaborator';
import { projectuploader } from './projectuploader';
import { like } from '../models/like';
import { category } from './category';
import { projecticon } from './projecticon';

export interface Project{
    id: number;
    name: string;
    description: string;
    shortDescription: string;
    user: projectuploader;
    likes: like[];
    categories: category[];
    projectIcon: projecticon;
    created: string;
    updated: string;
    collaborators: collaborator[];
    uri?: string;
}