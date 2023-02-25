export enum TeamType{
    Person = "Person",
    Groups = "Groups"
}

export class Project {
    public name: string;
    public type: string;
    public team: TeamType;
    public primaryColorCode: string;
    public description: string;
    public link: string;
    public order: number;
    public image: string;
}
