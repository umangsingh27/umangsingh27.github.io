export enum TeamType{
    Person = "Person",
    Groups = "Groups"
}

export interface Project {
    name: string;
    type: string;
    team: TeamType;
    primaryColorCode: string;
    description: string;
    link: string;
    order: number;
    image: string;
    archived: boolean;
}

export class Projects {
    public hideArchivedProjects: boolean = false;
    public projects: Project[];
}
