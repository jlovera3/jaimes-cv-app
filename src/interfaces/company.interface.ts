import { Project } from "./project.interface";

export interface Company {
    name: string;
    logo: string;
    url: string;
    projects: Project[];
}
