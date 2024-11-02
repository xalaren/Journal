import { Specialization } from "./Specialization";

export interface Employee {
    id: number;
    lastname: string;
    name?: string;
    middleName?: string;
    specialization: Specialization;
}