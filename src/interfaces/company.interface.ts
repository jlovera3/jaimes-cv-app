import { Project } from "./project.interface";

export interface Company {
  name: string;
  logo: string;
  url: string;
  role: string;
  duration: string;
  responsabilities: string[];
  projects: Project[];
}
