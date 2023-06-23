import { ExperienceData } from "./experience-data.model";
import { InformationsData } from "./informations-data.model";
import { SkillData } from "./skill-data.model";

export interface AppData {
    imagePath: string;
    name: string;
    informations: InformationsData[];
    skills: SkillData[];
    experiences: ExperienceData[];
}