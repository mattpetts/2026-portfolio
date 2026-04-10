export interface ProjectSchema {
    id: number;
    title: string;
    description: string;
    featured?: boolean;
    github?: string;
    url?: string;
}