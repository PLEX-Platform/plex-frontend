import { collaborator } from './collaborator';
import { projectuploader } from './projectuploader';
import { like } from './like';
import { categorie } from './categorie';
import { projecticon } from './projecticon';

export interface Project{
    id: number;
    name: string;
    description: string;
    shortDescription: string;
    user: projectuploader;
    externalLink: string;
    likes: like[];
    categories: categorie[];
    projectIcon: projecticon;
    created: string;
    updated: string;
    collaborators: collaborator[];
}