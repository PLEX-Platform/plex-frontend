export interface Project{
    id: number;
    name: string;
    description: string;
    uploader: string;
    externalLink: string;
    likes: number;
    uploadDate: Date;
    collaborators: number;
}