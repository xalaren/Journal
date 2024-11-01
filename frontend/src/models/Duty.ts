import { Employee } from "./Employee";

export interface Duty {
    id: string;
    date: Date;
    cost: number;
    isNowActive: boolean;
    isArchive: boolean;
    employee: Employee;
}